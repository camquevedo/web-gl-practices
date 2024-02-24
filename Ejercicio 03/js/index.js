function start(){
	
	var pos, $id=function(d){ return document.getElementById(d);};
    
    var xRot = 0, xSpeed = 0;
    var yRot = 0, ySpeed = 0;
    var z = -5.0;
    var filter = 0;
    var filters = [ 'nearest', 'linear', 'mipmap'];
	
	var tierra = new PhiloGL.O3D.Sphere(
		{
			nlat:30,
			nlong:30,
			radius:2,
			textures:'images/earth.jpg'
		}
	);
    
    PhiloGL('glCanvas', {
        camera:{
            position:{
				x:0,y:0,z:-15
			}
		},
		
		textures: {
			src:['images/earth.jpg'],
			parameters:[
				{
				name:'TEXTURE_MAG_FILTER',
				value:'LINEAR'	
				},
				{
				name:'TEXTURE_MIN_FILTER',
				value:'LINEAR_MIPMAP_NEAREST',
				generateMipmap:true
				}
            ]
        }, events: {
            onKeyDown: function(e) {

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                switch(e.key) {
                    case 'f':
                        filter = (filter + 1) % 3;
                        break;
                    case 'up':
                        xSpeed -= 0.02;
                        break;
                    case 'down':
                        xSpeed += 0.02;
                        break;
                    case 'left':
                        ySpeed -= 0.02;
                        break;
                    case 'right':
                        ySpeed += 0.02;
                        break;
                    //handle page up/down
                    default:
                        if (e.code == 33) {
                            z -= 0.05;
                        } else if (e.code == 34) {
                            z += 0.05;
                        }
                }
            }
        },
            
        onError : function() {
            alert("Algo paso");
        },
        
        onLoad: function(app){
            var gl=app.gl,
                program=app.program,
                scene=app.scene,
                canvas=app.canvas,
                camera=app.camera,
                view = new PhiloGL.Mat4;
				
			gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
			gl.clearDepth(1.0);
			gl.enable(gl.DEPTH_TEST);
			gl.depthFunc(gl.LEQUAL);
            
            camera.view.id();
			
			tierra.update();
			scene.add(tierra);
			draw();
            
            function draw(){
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPHT_BUFFER_BIT);
                scene.render();
                PhiloGL.Fx.requestAnimationFrame(draw);
            }
        }
    });
}