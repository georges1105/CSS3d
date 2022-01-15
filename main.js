var table = [
    "I", "Intelligent", "1.00794", 9, 2,
    "N", "Nerdy", "4.002602", 10, 2,
    "D", "Dynamic", "6.941", 11,2,
    "U", "Uber", "9.012182", 12, 2,
    "J", "Jovial", "10.811", 13, 2,
    "A", "Active", "10.811", 14, 2,
    "A", "Ardent", "10.811", 15, 2,
    "G", "Good", "1.00794", 9, 3,
    "E", "Energy", "4.002602", 10, 3,
    "O", "Obedient", "6.941", 11,3,
    "R", "Radical", "9.012182", 12, 3,
    "G", "Graceful", "10.811", 13, 3,
    "E", "Exquisite", "10.811", 14, 3
];
var camera,scene,renderer;var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };init();
animate();function init() {
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;scene = new THREE.Scene();simpleObjectsLayout();
    tableLayout();renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );transform( targets.table, 2000 );window.addEventListener( 'resize', onWindowResize, false );}function simpleObjectsLayout() {
    for ( var i = 0; i < table.length; i += 5 ) {var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';var number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = ( i / 5 ) + 1;
        element.appendChild( number );var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        element.appendChild( symbol );var details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        element.appendChild( details );var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add( object );
        objects.push( object );
    }
}function tableLayout() {
    for ( var i = 0; i < table.length; i += 5 ) {var object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;targets.table.push( object );}
}function transform( targets, duration ) {
    TWEEN.removeAll();
    for ( var i = 0; i < objects.length; i ++ ) {var object = objects[ i ];
        var target = targets[ i ];new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();}new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();}function onWindowResize() {camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();renderer.setSize( window.innerWidth, window.innerHeight );render();}function render() {renderer.render( scene, camera );}function animate() {
    requestAnimationFrame( animate );
    TWEEN.update();
}