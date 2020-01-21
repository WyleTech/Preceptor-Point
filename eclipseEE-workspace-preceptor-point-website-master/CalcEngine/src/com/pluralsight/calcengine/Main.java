package com.pluralsight.calcengine;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


	MathEquation[] equations = new MathEquation[4];
	equations[0] = new MathEquation (100.0, 50.0, 'd');
	equations[1] = new MathEquation (25.0, 92.0, 'a');
	equations[2] = new MathEquation (225.0, 17.0, 's');
	equations[3] = new MathEquation (11.0, 3.0, 'm');
	
	for(MathEquation equation : equations) {
	equation.execute();
	System.out.print("test=");
	System.out.println(equation.getResult());
	}
	}
	

	
	
}

