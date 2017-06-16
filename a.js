/**
 * Created by Administrator on 2017/5/25.
 */
var num=285,
    s;
while(num>=10){
    s=1;
    while(num>0){
        s*=num%10;
        num=parseInt(num/10);
    }
    num=s;
}
console.log(num);