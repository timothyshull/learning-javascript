$("#cloud1g").velocity({ 
    /* Coordinate animation works. */
    x: 200,
    r: 25,
    /* 2D transforms work. */
    translateX: "200px",
    /* 3D transforms work in non-IE browsers. */
    translateZ: "200px",
    /* "Fill" color animation works. */
    fill: "#ff0000",
    strokeRed: 255,
    strokeGreen: 0,
    strokeBlue: 0,
    /* Some standard CSS properties work. */
    opacity: 1,
    width: "50%"
}, { loop: true });



