#!/usr/bin/env bash

set -eu

x=.paket

if [ ! -d $x ]; then
  mkdir $x
  curl https://github.com/fsprojects/Paket/releases/download/2.12.5/paket.bootstrapper.exe -L --insecure -o $x/paket.bootstrapper.exe
fi

mono $x/paket.bootstrapper.exe
mono $x/paket.exe restore
mono packages/FAKE/tools/FAKE.exe build.fsx
