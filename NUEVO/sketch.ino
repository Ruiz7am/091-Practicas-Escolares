const int rojo = 3;
const int azul = 5;
const int verde = 6;

const int potenciometro1 = A0;
const int potenciometro2 = A1;
const int potenciometro3 = A2;

int intensidad1;
int intensidad2;
int intensidad3;

void setup(){
    pinMode (rojo, OUTPUT);
    pinMode (azul, OUTPUT);
    pinMode (verde, OUTPUT);
    pinMode (potenciometro1, INPUT);
    pinMode (potenciometro2, INPUT);
    pinMode (potenciometro3, INPUT);
}

void loop(){
    intensidad1 = analogRead (potenciometro1)/4;
    analogWrite(rojo, intensidad1);
    intensidad2 = analogRead (potenciometro2)/4;
    analogWrite(azul, intensidad2);
    intensidad3 = analogRead (potenciometro3)/4;
    analogWrite(verde, intensidad3);
}