function assertType<T>(_x: T) {}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl")!;

const ext_ANGLE_instanced_arrays = gl.getExtension("ANGLE_instanced_arrays");
// TypeScript should infer: ANGLE_instanced_arrays | null
assertType<ANGLE_instanced_arrays | null>(ext_ANGLE_instanced_arrays);

const ext_EXT_blend_minmax = gl.getExtension("EXT_blend_minmax");
assertType<EXT_blend_minmax | null>(ext_EXT_blend_minmax);

const ext_EXT_color_buffer_float = gl.getExtension("EXT_color_buffer_float");
assertType<EXT_color_buffer_float | null>(ext_EXT_color_buffer_float);

const ext_EXT_color_buffer_half_float = gl.getExtension("EXT_color_buffer_half_float");
assertType<EXT_color_buffer_half_float | null>(ext_EXT_color_buffer_half_float);

const ext_EXT_float_blend = gl.getExtension("EXT_float_blend");
assertType<EXT_float_blend | null>(ext_EXT_float_blend);

const ext_EXT_frag_depth = gl.getExtension("EXT_frag_depth");
assertType<EXT_frag_depth | null>(ext_EXT_frag_depth);

const ext_EXT_sRGB = gl.getExtension("EXT_sRGB");
assertType<EXT_sRGB | null>(ext_EXT_sRGB);

const ext_EXT_shader_texture_lod = gl.getExtension("EXT_shader_texture_lod");
assertType<EXT_shader_texture_lod | null>(ext_EXT_shader_texture_lod);

const ext_EXT_texture_compression_bptc = gl.getExtension("EXT_texture_compression_bptc");
assertType<EXT_texture_compression_bptc | null>(ext_EXT_texture_compression_bptc);

const ext_EXT_texture_compression_rgtc = gl.getExtension("EXT_texture_compression_rgtc");
assertType<EXT_texture_compression_rgtc | null>(ext_EXT_texture_compression_rgtc);

const ext_EXT_texture_filter_anisotropic = gl.getExtension("EXT_texture_filter_anisotropic");
assertType<EXT_texture_filter_anisotropic | null>(ext_EXT_texture_filter_anisotropic);

const ext_KHR_parallel_shader_compile = gl.getExtension("KHR_parallel_shader_compile");
assertType<KHR_parallel_shader_compile | null>(ext_KHR_parallel_shader_compile);

const ext_OES_element_index_uint = gl.getExtension("OES_element_index_uint");
assertType<OES_element_index_uint | null>(ext_OES_element_index_uint);

const ext_OES_fbo_render_mipmap = gl.getExtension("OES_fbo_render_mipmap");
assertType<OES_fbo_render_mipmap | null>(ext_OES_fbo_render_mipmap);

const ext_OES_standard_derivatives = gl.getExtension("OES_standard_derivatives");
assertType<OES_standard_derivatives | null>(ext_OES_standard_derivatives);

const ext_OES_texture_float = gl.getExtension("OES_texture_float");
assertType<OES_texture_float | null>(ext_OES_texture_float);

const ext_OES_texture_float_linear = gl.getExtension("OES_texture_float_linear");
assertType<OES_texture_float_linear | null>(ext_OES_texture_float_linear);

const ext_OES_texture_half_float = gl.getExtension("OES_texture_half_float");
assertType<OES_texture_half_float | null>(ext_OES_texture_half_float);

const ext_OES_texture_half_float_linear = gl.getExtension("OES_texture_half_float_linear");
assertType<OES_texture_half_float_linear | null>(ext_OES_texture_half_float_linear);

const ext_OES_vertex_array_object = gl.getExtension("OES_vertex_array_object");
assertType<OES_vertex_array_object | null>(ext_OES_vertex_array_object);

const ext_OVR_multiview2 = gl.getExtension("OVR_multiview2");
assertType<OVR_multiview2 | null>(ext_OVR_multiview2);

const ext_WEBGL_color_buffer_float = gl.getExtension("WEBGL_color_buffer_float");
assertType<WEBGL_color_buffer_float | null>(ext_WEBGL_color_buffer_float);

const ext_WEBGL_compressed_texture_astc = gl.getExtension("WEBGL_compressed_texture_astc");
assertType<WEBGL_compressed_texture_astc | null>(ext_WEBGL_compressed_texture_astc);

const ext_WEBGL_compressed_texture_etc = gl.getExtension("WEBGL_compressed_texture_etc");
assertType<WEBGL_compressed_texture_etc | null>(ext_WEBGL_compressed_texture_etc);

const ext_WEBGL_compressed_texture_etc1 = gl.getExtension("WEBGL_compressed_texture_etc1");
assertType<WEBGL_compressed_texture_etc1 | null>(ext_WEBGL_compressed_texture_etc1);

const ext_WEBGL_compressed_texture_pvrtc = gl.getExtension("WEBGL_compressed_texture_pvrtc");
assertType<WEBGL_compressed_texture_pvrtc | null>(ext_WEBGL_compressed_texture_pvrtc);

const ext_WEBGL_compressed_texture_s3tc = gl.getExtension("WEBGL_compressed_texture_s3tc");
assertType<WEBGL_compressed_texture_s3tc | null>(ext_WEBGL_compressed_texture_s3tc);

const ext_WEBGL_compressed_texture_s3tc_srgb = gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");
assertType<WEBGL_compressed_texture_s3tc_srgb | null>(ext_WEBGL_compressed_texture_s3tc_srgb);

const ext_WEBGL_debug_renderer_info = gl.getExtension("WEBGL_debug_renderer_info");
assertType<WEBGL_debug_renderer_info | null>(ext_WEBGL_debug_renderer_info);

const ext_WEBGL_debug_shaders = gl.getExtension("WEBGL_debug_shaders");
assertType<WEBGL_debug_shaders | null>(ext_WEBGL_debug_shaders);

const ext_WEBGL_depth_texture = gl.getExtension("WEBGL_depth_texture");
assertType<WEBGL_depth_texture | null>(ext_WEBGL_depth_texture);

const ext_WEBGL_draw_buffers = gl.getExtension("WEBGL_draw_buffers");
assertType<WEBGL_draw_buffers | null>(ext_WEBGL_draw_buffers);

const ext_WEBGL_lose_context = gl.getExtension("WEBGL_lose_context");
assertType<WEBGL_lose_context | null>(ext_WEBGL_lose_context);

const ext = gl.getExtension("WEBGL_multi_draw");
assertType<WEBGL_multi_draw | null>(ext);
