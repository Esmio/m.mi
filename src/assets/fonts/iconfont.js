(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"  ></path></symbol><symbol id="icon-cart" viewBox="0 0 1024 1024"><path d="M940.8 284.8c-16-19.2-38.4-28.8-64-28.8H352c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c6.4 0 12.8 3.2 16 6.4 3.2 3.2 6.4 9.6 3.2 19.2l-48 336c0 9.6-12.8 19.2-25.6 19.2h-38.4-3.2-444.8c-12.8 0-25.6-16-25.6-28.8L256 300.8l-28.8-156.8C220.8 99.2 182.4 64 134.4 64H96c-19.2 0-32 16-32 32s12.8 32 32 32h38.4c12.8 0 25.6 9.6 28.8 25.6L192 310.4l51.2 371.2C249.6 729.6 288 768 332.8 768h486.4c44.8 0 83.2-32 89.6-73.6L960 355.2c3.2-25.6-3.2-51.2-19.2-70.4z" fill="#666666" ></path><path d="M323.2 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path><path d="M832 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z" fill="#666666" ></path></symbol><symbol id="icon-cartfill" viewBox="0 0 1024 1024"><path d="M323.2 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path><path d="M832 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path><path d="M940.8 284.8c-16-19.2-38.4-28.8-64-28.8H249.6l-22.4-112C220.8 99.2 182.4 64 134.4 64H96c-19.2 0-32 16-32 32s12.8 32 32 32h38.4c12.8 0 25.6 9.6 28.8 25.6L192 310.4l51.2 371.2C249.6 729.6 288 768 332.8 768h486.4c44.8 0 83.2-32 89.6-73.6L960 355.2c3.2-25.6-3.2-51.2-19.2-70.4z" fill="#666666" ></path></symbol><symbol id="icon-homefill" viewBox="0 0 1024 1024"><path d="M947.2 422.4L572.8 115.2c-32-25.6-86.4-25.6-118.4 0L76.8 425.6c-12.8 6.4-16 22.4-9.6 35.2 3.2 12.8 16 19.2 28.8 19.2h32v364.8C128 892.8 163.2 928 211.2 928H416c19.2 0 32-12.8 32-32v-147.2c0-22.4 35.2-44.8 64-44.8 28.8 0 67.2 22.4 67.2 44.8V896c0 19.2 12.8 32 32 32h208c48 0 80-32 80-83.2V480h32c12.8 0 25.6-9.6 28.8-22.4 3.2-12.8 0-25.6-12.8-35.2z" fill="#666666" ></path></symbol><symbol id="icon-goods" viewBox="0 0 1024 1024"><path d="M934.4 288c0-16-16-28.8-32-28.8h-137.6c-25.6-108.8-124.8-188.8-240-188.8h-19.2c-115.2 0-214.4 80-240 188.8H128C108.8 256 96 268.8 96 288l-28.8 553.6v3.2C73.6 912 128 960 192 960h649.6c64 0 118.4-51.2 121.6-115.2v-3.2L934.4 288z m-96 608H192c-28.8 0-54.4-22.4-57.6-54.4L156.8 320h102.4v134.4c-19.2 9.6-32 32-32 54.4 0 35.2 28.8 64 64 64s64-28.8 64-64c0-22.4-12.8-44.8-32-54.4V313.6c0-102.4 83.2-182.4 182.4-182.4h19.2c102.4 0 182.4 83.2 182.4 182.4v144c-19.2 9.6-32 32-32 54.4 0 35.2 28.8 64 64 64s64-28.8 64-64c0-22.4-12.8-44.8-32-54.4V320h99.2l25.6 521.6c0 32-25.6 54.4-57.6 54.4z" fill="#666666" ></path><path d="M611.2 256h-192c-19.2 0-32 12.8-32 32s12.8 32 32 32h192c19.2 0 32-12.8 32-32s-12.8-32-32-32z" fill="#666666" ></path></symbol><symbol id="icon-searchlist" viewBox="0 0 1024 1024"><path d="M954.4 813.952l-137.664-180.288c48.832-46.656 79.456-112.224 79.456-184.928 0-141.152-114.848-256-256-256s-256 114.848-256 256 114.848 256 256 256c45.472 0 88.096-12.032 125.152-32.896l138.144 180.928c6.304 8.256 15.808 12.608 25.472 12.608 6.752 0 13.6-2.112 19.36-6.56C962.432 848.064 965.12 827.968 954.4 813.952zM448.224 448.704c0-105.888 86.112-192 192-192s192 86.112 192 192-86.112 192-192 192S448.224 554.592 448.224 448.704z"  ></path><path d="M320 320 128 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S337.664 320 320 320z"  ></path><path d="M256 576 128 576c-17.664 0-32-14.304-32-32 0-17.664 14.336-32 32-32l128 0c17.664 0 32 14.336 32 32C288 561.696 273.664 576 256 576z"  ></path><path d="M480 800 128 800c-17.664 0-32-14.304-32-32s14.336-32 32-32l352 0c17.664 0 32 14.304 32 32S497.664 800 480 800z"  ></path></symbol><symbol id="icon-peoplefill" viewBox="0 0 1024 1024"><path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" fill="#666666" ></path></symbol><symbol id="icon-people" viewBox="0 0 1024 1024"><path d="M800 384c0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 28.8-150.4 160-259.2 313.6-262.4h6.4c156.8 0 284.8-128 284.8-288zM288 384c0-124.8 99.2-224 224-224s224 99.2 224 224c0 121.6-99.2 220.8-220.8 224H505.6C384 604.8 288 505.6 288 384zM723.2 675.2c-16-9.6-35.2-6.4-44.8 9.6-9.6 16-6.4 35.2 9.6 44.8 73.6 51.2 124.8 121.6 140.8 204.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-99.2-80-185.6-169.6-246.4z" fill="#666666" ></path></symbol><symbol id="icon-goodsfill" viewBox="0 0 1024 1024"><path d="M898.133333 341.333333c0-10.666667-10.666667-21.333333-21.333333-21.333333h-128v-8.533333C746.666667 185.6 646.4 85.333333 520.533333 85.333333h-17.066666C379.733333 85.333333 277.333333 185.6 277.333333 311.466667v8.533333H149.333333c-10.666667 0-21.333333 8.533333-21.333333 21.333333l-17.066667 518.4v2.133334c4.266667 55.466667 51.2 98.133333 106.666667 98.133333h595.2c55.466667 0 102.4-42.666667 106.666667-98.133333v-2.133334l-21.333334-518.4zM320 311.466667C320 209.066667 403.2 128 503.466667 128h17.066666c100.266667 0 183.466667 83.2 183.466667 183.466667v8.533333H320v-8.533333zM298.666667 554.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667 0-14.933333 8.533333-29.866667 21.333333-36.266667V384c0-12.8 8.533333-21.333333 21.333334-21.333333s21.333333 8.533333 21.333333 21.333333v91.733333c12.8 6.4 21.333333 21.333333 21.333333 36.266667 0 23.466667-19.2 42.666667-42.666666 42.666667z m426.666666 0c-23.466667 0-42.666667-19.2-42.666666-42.666667 0-14.933333 8.533333-29.866667 21.333333-36.266667V384c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333334 21.333333v91.733333c12.8 6.4 21.333333 21.333333 21.333333 36.266667 0 23.466667-19.2 42.666667-42.666667 42.666667z" fill="#646464" ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667c234.666667 0 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0L554.666667 725.333333zM554.666667 554.666667l-85.333333 0L469.333333 298.666667l85.333333 0L554.666667 554.666667z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M781.780353 534.914896c0 14.963807 6.158257 29.834492 16.743336 40.419572 10.578939 10.579963 25.450648 16.743336 40.417525 16.743336 14.96176 0 29.839609-6.163373 40.417525-16.743336 10.585079-10.585079 16.743336-25.455765 16.743336-40.419572 0-14.966876-6.158257-29.837562-16.743336-40.422641-10.578939-10.579963-25.455765-16.743336-40.417525-16.743336-14.966876 0-29.839609 6.163373-40.417525 16.743336C787.93861 505.07631 781.780353 519.948019 781.780353 534.914896L781.780353 534.914896zM781.780353 534.914896"  ></path><path d="M131.563408 534.914896c0 19.630083 8.082072 39.134299 21.958104 53.014424 13.881149 13.881149 33.390481 21.963221 53.018517 21.963221s39.138392-8.082072 53.018517-21.963221c13.879102-13.879102 21.958104-33.384341 21.958104-53.014424 0-19.629059-8.077979-39.138392-21.958104-53.017494-13.881149-13.881149-33.390481-21.959128-53.018517-21.959128s-39.138392 8.077979-53.018517 21.959128C139.64548 495.776504 131.563408 515.285836 131.563408 534.914896L131.563408 534.914896zM131.563408 534.914896"  ></path><path d="M465.576691 851.113441c0 14.966876 6.163373 29.839609 16.743336 40.422641 10.585079 10.579963 25.455765 16.738219 40.422641 16.738219 14.963807 0 29.839609-6.158257 40.419572-16.738219 10.579963-10.584056 16.743336-25.455765 16.743336-40.422641 0-14.96176-6.163373-29.839609-16.743336-40.417525-10.579963-10.585079-25.455765-16.743336-40.419572-16.743336-14.966876 0-29.837562 6.158257-40.422641 16.743336C471.740064 821.273832 465.576691 836.150658 465.576691 851.113441L465.576691 851.113441zM465.576691 851.113441"  ></path><path d="M424.760077 218.712257c0 25.653263 10.56052 51.14689 28.698622 69.284993 18.137079 18.137079 43.63173 28.698622 69.283969 28.698622 25.64917 0 51.142797-10.561543 69.2809-28.698622 18.138102-18.138102 28.698622-43.632753 28.698622-69.284993 0-25.648147-10.56052-51.142797-28.698622-69.2809-18.137079-18.138102-43.63173-28.698622-69.2809-28.698622-25.653263 0-51.14689 10.56052-69.283969 28.698622C435.320597 167.56946 424.760077 193.064111 424.760077 218.712257L424.760077 218.712257zM424.760077 218.712257"  ></path><path d="M689.166025 758.499114c0 14.966876 6.16235 29.837562 16.742313 40.422641 10.585079 10.579963 25.455765 16.743336 40.419572 16.743336 14.966876 0 29.837562-6.163373 40.422641-16.743336 10.579963-10.585079 16.743336-25.455765 16.743336-40.422641 0-14.963807-6.163373-29.834492-16.743336-40.419572-10.585079-10.579963-25.455765-16.743336-40.422641-16.743336-14.962783 0-29.834492 6.163373-40.419572 16.743336C695.328375 728.664621 689.166025 743.535307 689.166025 758.499114L689.166025 758.499114zM689.166025 758.499114"  ></path><path d="M213.353203 311.326585c0 22.463618 9.247618 44.788066 25.12933 60.668755 15.885805 15.881712 38.20923 25.128307 60.672848 25.128307 22.463618 0 44.788066-9.245572 60.668755-25.128307 15.881712-15.880689 25.128307-38.205137 25.128307-60.668755 0-22.462594-9.245572-44.787042-25.128307-60.672848-15.880689-15.881712-38.205137-25.12933-60.668755-25.12933-22.462594 0-44.787042 9.247618-60.672848 25.12933C222.599797 266.539542 213.353203 288.86399 213.353203 311.326585L213.353203 311.326585zM213.353203 311.326585"  ></path><path d="M241.98838 758.499114c0 14.966876 6.163373 29.837562 16.743336 40.422641 10.585079 10.579963 25.455765 16.743336 40.422641 16.743336 14.963807 0 29.839609-6.163373 40.419572-16.743336 10.584056-10.585079 16.742313-25.455765 16.742313-40.422641 0-14.963807-6.158257-29.834492-16.742313-40.419572-10.579963-10.579963-25.455765-16.743336-40.419572-16.743336-14.966876 0-29.837562 6.163373-40.422641 16.743336C248.151753 728.664621 241.98838 743.535307 241.98838 758.499114L241.98838 758.499114zM241.98838 758.499114"  ></path><path d="M689.166025 311.326585c0 14.9679 6.16235 29.839609 16.742313 40.419572 10.585079 10.584056 25.455765 16.742313 40.419572 16.742313 14.966876 0 29.837562-6.158257 40.422641-16.742313 10.579963-10.579963 16.743336-25.450648 16.743336-40.419572 0-14.966876-6.163373-29.837562-16.743336-40.417525-10.585079-10.585079-25.455765-16.743336-40.422641-16.743336-14.962783 0-29.834492 6.158257-40.419572 16.743336C695.328375 281.489022 689.166025 296.359708 689.166025 311.326585L689.166025 311.326585zM689.166025 311.326585"  ></path></symbol><symbol id="icon-leimupinleifenleileibie" viewBox="0 0 1024 1024"><path d="M320 64H192c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z m448 0H640c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128zM320 512H192c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128z m448 0H640c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128z"  ></path></symbol><symbol id="icon-leimupinleifenleileibie1" viewBox="0 0 1024 1024"><path d="M355.55555555 526.22222222L227.55555555 526.22222222c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C483.55555555 583.82222222 425.95555555 526.22222222 355.55555555 526.22222222zM419.55555555 782.22222222c0 35.2-28.8 64-64 64L227.55555555 846.22222222c-35.2 0-64-28.8-64-64l0-128c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L419.55555555 782.22222222zM803.55555555 78.22222222l-128 0C605.15555555 78.22222222 547.55555555 135.82222222 547.55555555 206.22222222l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L931.55555555 206.22222222C931.55555555 135.82222222 873.95555555 78.22222222 803.55555555 78.22222222zM867.55555555 334.22222222c0 35.2-28.8 64-64 64l-128 0C640.35555555 398.22222222 611.55555555 369.42222222 611.55555555 334.22222222L611.55555555 206.22222222c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L867.55555555 334.22222222zM803.55555555 526.22222222l-128 0c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C931.55555555 583.82222222 873.95555555 526.22222222 803.55555555 526.22222222zM867.55555555 782.22222222c0 35.2-28.8 64-64 64l-128 0c-35.2 0-64-28.8-64-64l0-128c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L867.55555555 782.22222222zM355.55555555 78.22222222L227.55555555 78.22222222C157.15555555 78.22222222 99.55555555 135.82222222 99.55555555 206.22222222l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L483.55555555 206.22222222C483.55555555 135.82222222 425.95555555 78.22222222 355.55555555 78.22222222zM419.55555555 334.22222222c0 35.2-28.8 64-64 64L227.55555555 398.22222222C192.35555555 398.22222222 163.55555555 369.42222222 163.55555555 334.22222222L163.55555555 206.22222222c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L419.55555555 334.22222222z" fill="#9E9B9B" ></path></symbol><symbol id="icon-biyan" viewBox="0 0 1024 1024"><path d="M1017.2 333.7c10-11.4 8.8-28.8-2.6-38.8-11.4-10-28.8-8.8-38.8 2.6-54.4 62.2-124.3 113.6-202 148.6C692 483 603.9 501.7 512 501.7S332 483 250.2 446.1c-77.8-35-147.6-86.4-202-148.6-10-11.4-27.3-12.6-38.8-2.6-11.4 10-12.6 27.3-2.6 38.8 45.2 51.6 100 96.4 160.8 131.7L19.5 648.9c-9.5 11.8-7.7 29.1 4.1 38.6 5.1 4.1 11.2 6.1 17.2 6.1 8 0 16-3.5 21.4-10.2l155-192c3.4 1.6 6.9 3.2 10.4 4.8 80.8 36.4 167.1 56.5 256.9 59.9v152.4c0 15.2 12.3 27.5 27.5 27.5s27.5-12.3 27.5-27.5V556.1c89.8-3.4 176.1-23.5 256.9-59.9 4-1.8 8-3.7 12-5.6l153.3 192.6c5.4 6.8 13.4 10.4 21.5 10.4 6 0 12-2 17.1-6 11.9-9.4 13.8-26.7 4.4-38.6L857.8 464.5c60.3-35.2 114.6-79.6 159.4-130.8z" fill="" ></path></symbol><symbol id="icon-kanjianmima-" viewBox="0 0 1024 1024"><path d="M512.075 772.4c-50.2 0-100.3-5.8-148.7-17.2-47.1-11.1-93-27.5-136.5-48.9C141.975 664.6 65.575 603.3 6.075 529.2c-8.1-10-8.1-24.3 0-34.4 59.5-74.2 135.8-135.4 220.7-177.2 43.5-21.4 89.4-37.8 136.5-48.9 48.5-11.4 98.5-17.2 148.7-17.2s100.3 5.8 148.7 17.2c47.1 11.1 93 27.5 136.5 48.9 84.9 41.7 161.2 103 220.7 177.2 8.1 10 8.1 24.3 0 34.4-59.5 74.2-135.8 135.4-220.7 177.2-43.5 21.4-89.4 37.8-136.5 48.9-48.3 11.4-98.4 17.1-148.6 17.1zM63.275 512c52.2 60.2 116.7 110.1 187.8 145 81.6 40.1 169.4 60.5 261 60.5s179.4-20.3 261-60.5c71.1-34.9 135.6-84.8 187.8-145-52.2-60.2-116.7-110.1-187.8-145-81.6-40.1-169.4-60.5-261-60.5S332.675 326.8 251.075 367c-71.1 34.9-135.6 84.8-187.8 145z" fill="" ></path><path d="M512.075 655.9c-79.4 0-143.9-64.6-143.9-143.9 0-79.4 64.6-143.9 143.9-143.9S655.975 432.6 655.975 512 591.475 655.9 512.075 655.9z m0-232.9c-49.1 0-89 39.9-89 89s39.9 89 89 89 89-39.9 89-89-39.9-89-89-89z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)