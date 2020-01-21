package com.pluralsight.calcengine;

public class MathEquation {
	private double leftVal;
	private double rightVal;
	private char opCode = 'a';
	private double result;
	
	public MathEquation(char opCode) {
		this.opCode = opCode;
	}
	public MathEquation(double leftVal, double rightVal, char opCode) {
		this.leftVal = leftVal;
		this.rightVal = rightVal;
		this.opCode = opCode;
	}
	public MathEquation() {
		// TODO Auto-generated constructor stub
	}
	public double getLeftVal() {
		return leftVal;
	}
	public void setLeftVal(double leftVal) {
		this.leftVal = leftVal;
	}
	public double getRightVal() {
		return rightVal;
	}
	public void setRightVal(double reightVal) {
		this.rightVal = reightVal;
	}
	public char getOpCode() {
		return opCode;
	}
	public void setOpCode(char opCode) {
		this.opCode = opCode;
	}
	public double getResult() {
		return result;
	}
	
	public void execute() {
		switch(opCode) {
		case 'a':
			result = leftVal + rightVal;
			break;
		case 's':
			result = leftVal - rightVal;
			break;
		case 'd':
			result = rightVal != 0 ? leftVal / rightVal : 0;
			break;
		case 'm':
			result = leftVal * rightVal;
			break;
//		default:
//			System.out.println("Error - invalid opCode");
//			result = 0;
//			break;
		}
	}
	

}
