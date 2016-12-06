#pragma once
class NA_Vector;
class NA_DirectionalLight
{
//private:
public:
	NA_Vector facing;
	float intensity;
public:
	NA_DirectionalLight();
	~NA_DirectionalLight();
};

