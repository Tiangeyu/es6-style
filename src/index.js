function testLet(){
    {
        let a =1;
        var b =2;
    }
    console.log("b="+b);
    console.log("a="+a);   
}
function pattern(){
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}
function pattern1(){
    let a,b,c;
    [a,b,c]=[1,2,3,4,5,6];
    console.log(a,b,c);
}

function patternUse(){
    let x = 1;
    let y = 2;
    
    [x, y] = [y, x];
    console.log("x="+x, "y="+y)
}

function patternUse1(){
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };
          
    let { id, status, data: number } = jsonData;
   
    console.log(id, status, number);
}

function stringTest(){
    let user={
        name:'list',
        info:'hello world'
    };

    console.log(`i am ${user.name},${user.info}`);    
}

function stringTest1(){
    const A = 'first';
    const B = "second";
    let str = `
                <ul>
                    <li>${A}</li>
                    <li>${B}</li>
                </ul>
            `
    console.log(str)
}

function fncTest(){
    function log(x, y = 'World') {
        console.log(x, y);
    }
    
    log('Hello') 
    log('Hello', 'China') 
    log('Hello', '') 
}

function fncTest1(){
    function foo({x, y = 5}) {             
        // {x,y=5} == {x:x, y:y=5}
        // 前面的x,y只是为了与键名匹配, 后面的x,y是输出的值

        console.log(x, y);  
    }
        
    foo({})             // undefined 5
    foo({x: 1})         // 1 5
    foo({x: 1, y: 2})   // 1 2
    foo()               // TypeError: Cannot read property 'x' of undefined
}

function restTest(){
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a'); 
}