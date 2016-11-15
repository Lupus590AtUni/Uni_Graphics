// colour fragment shader
// Andy Baker
// Digital Whorehouse Productions 2008

uniform float		Intensity;
//uniform sampler2D	grabTexture;

varying vec2 		texCoord;

void main(void)
{
	vec3 colour;
	int rem = int(mod( float(int(texCoord.x*10.0)), 10));

	if( rem == 0 )
	{
		colour = vec3(1.0,0.0,0.0);
	}
	else
	{
		colour = vec3(0.0,1.0,0.0);
	}


	gl_FragColor = vec4( vec3(colour), 1.0 );

}