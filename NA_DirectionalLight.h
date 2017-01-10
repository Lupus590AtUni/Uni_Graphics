#pragma once
#include "NA_Vector.h";
class NA_DirectionalLight
{
//private:
public:
	NA_Vector facing;
	NA_Vector position;
	float intensity;
public:
	NA_DirectionalLight();
	~NA_DirectionalLight();
};

