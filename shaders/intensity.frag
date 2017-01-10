// colour fragment shader
// Andy Baker
// Digital Whorehouse Productions 2008

uniform float		Intensity;
uniform sampler2D	grabTexture;

varying vec2 		texCoord;

void main(void)
{

//Blinn-Phong Reflection

// would be Inputs:
  float ambientFudge = 1.0f;
  float ambientIntencity = 1.0f;
  int lightCount 1
  vec3 normal =
  vec3 halfway[] 
  float shineFudge = 1.0f;
  float lightIntensity[]
  vec3 lightDirection[]
  float diffuseFudge = 1.0f;
  float specularFudge = 1.0f;

	vec3 ambient = ambientFudge * ambientIntencity;

	vec3 nonAmbientTotal = vec3f(0);
	for (int i = 0; i < lightCount; i++)
	{
	  vec3 rawReflection = normal.dot(halfway[0]);
	  for (int j = 1; j < shineFudge; j++)
	  {
		rawReflection *= normal.dot(halfway[i]); // optimise?
	  }
	  nonAmbientTotal += lightIntensity[i] * (diffuseFudge * (normal.dot(lightDirection[i])) + specularFudge * rawReflection);
	}


	vec3 totalIntencity = ambient + nonAmbientTotal;


	gl_FragColor = totalInencity;

}