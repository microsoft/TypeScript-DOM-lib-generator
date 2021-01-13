const {markdown} = require("danger")
const {readFileSync, existsSync} = require("fs")
const parseDiff = require("parse-diff")

const diffPath = "./TypeScript/baseline-changes.diff"
if (existsSync(diffPath)) {
  const diffContents = readFileSync(diffPath, "utf8")
  const diffedFiles = parseDiff(diffContents)
  
  const uninterestingFiles = [".generated.d.ts", "globalThisBlockscopedProperties.types", "mappedTypeRecursiveInference.types"]
  const withoutKnownNormalFails = diffedFiles.filter(diff => {
    return !uninterestingFiles.filter(suffix => diff.to && diff.to.endsWith(suffix)).length > 0
  })

  const md = ["## Changed baselines from the TypeScript test suite", "\nThese are the test changes in the TypeScript codebase which showed a difference (excluding a few which will always change), it should give a small sense of what to expect on the TypeScript side if this PR is merged."]

  withoutKnownNormalFails.forEach(diff => {
    md.push(`#### [${diff.to || diff.from}](https://github.com/microsoft/TypeScript/blob/master/${diff.to || diff.from})`)
    
    md.push("```diff")
    diff.chunks.forEach(chunk => {
      md.push(chunk.content)

      chunk.changes.forEach(change => {
        md.push(change.content)
      })
    })
    md.push("```")
  })

  if (md.length > 2) {
    markdown(md.join("\n"))
  }
}
