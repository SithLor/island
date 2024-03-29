//IEEE754
class IEEE754 {
    static MAX_VALUE = 3.4028234663852886e+38;
    static MIN_VALUE = 1.1754943508222875e-38;
    static MAX_EXPONENT = 128;
    static MIN_EXPONENT = -127;

}
//integers and IEEE 754 numbers
//32 bit integers can be bool and as memory addresses


type numtype = "i32" | "i64" | "f32" | "f64";
//vectype ::= "v128"
type vectype = "v128"
//reftype ::= "funcref" | "externref"
type reftype = "funcref"|"externref"
//value type ::= numtype | vectype | reftype
type valtype = numtype | vectype | reftype;
//result type ::= [vec(valtype)]
type resulttype = valtype[];
// functype ::= resulttype -> resulttype
type functype = [resulttype,resulttype];
//limits ::= {min:u32,max:u32}
type limits = {min:"u32",max:"u32"};
//memtype ::= limits
type memtype = limits;
//tabletype ::= limits reftypes
type tabletype = limits & {reftype:reftype};

