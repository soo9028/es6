function show(){
    alert();    
}

//이 문서안에서 외부로 내보낼 것을 지정 
//export할때 이 .js문서에서 대표되는 녀석을 반드시 default라는 키워드 추가 필요
export default show;

//export default는 .js문서에서 1개만 있어야 함.

//또다른 함수를 export하려면
export function add(a, b){
    alert();
}
//export default add; //실행하면 에러.. expot defaul는 1개만 가능함
//export add; //문법에러 - default 와 같은 사용하지 않으면 에러 - 만들때부터 export

//변수도 export  가능함
export let name="aaa";
export const age=20;

export class Person{

}