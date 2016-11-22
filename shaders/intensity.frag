// colour fragment shader
// Andy Baker
// Digital Whorehouse Productions 2008

uniform float		Intensity;
uniform sampler2D	grabTexture;

varying vec2 		texCoord;

void main(void)
{

	

	
	vec4 sumColour = vec4(0.0);

	//convert to pixel space to get neigbour pixels
	vec2 neighbourCoord = vec2(texCoord * 500.0);

	neighbourCoord += vec2(-1.0,0.0);//left middle
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(-1.0,-1.0);//left bottom
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(-1.0,1.0);//left top
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(0.0,0.0);//middle middle
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(0.0,-1.0);//middle bottom
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(0.0,1.0);//middle top
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(1.0,1.0);//right top
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(1.0,0.0);//right middle
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space
	neighbourCoord += vec2(1.0,-1.0);//right bottom
	sumColour += vec4(texture2D(grabTexture, neighbourCoord.xy/vec2(500.0)));//revert to texture space

	vec4 colour = vec4(sumColour/9.0);


	//colour = vec4(1.0,0.0,0.0,0.0);



	gl_FragColor = vec4( vec3(colour), 1.0 );

}