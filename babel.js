function mex(a,b,c) {
    if(a!=0&&b!=0&&c!=0)return 0
    if(a!=1&&b!=1&&c!=1)return 1
    if(a!=2&&b!=2&&c!=2)return 2
    return 3
}
const vm = new Vue ({
  el: '#demo',
  data:{
    N:0,
    valuelist:"",
    MexString:"",
    message:"",
    cancompute:false,
    MEXLIST:[],
    MEXvalue:[],
    MEXSUM:0
},
  methods: { // メソッド ...（3）
    compute:function(){
        this.cancompute=false
        if(isNaN(this.N)){
            this.message="Nは数値ではありません"
        }
        else if(this.valuelist.length!=this.N){
            this.message="数列の長さが"+this.N.toString()+"ではありません"
        }
        else if(this.MexString.length!=this.N){
            this.message="文字列の長さが"+this.N.toString()+"ではありません"
        }
        else{
            if(this.valuelist.replace(/(0|1|2)/g,"")!=""){
                this.message="数列に0,1,2以外の値が含まれています"
            }
            if(this.MexString.replace(/(M|E|X)/g,"")!=""){
                this.message="文字列にM,E,X以外の文字が含まれています"
            }
            else{
                this.cancompute=true
                arr=[]
                for(let i=0;i<this.N;i++){
                    for(let j=0;j<i;j++){
                        for(let h=0;h<j;h++){
                            arr.push([h,j,i])
                        }
                    }
                }
                this.MEXLIST=arr.filter(list => this.MexString[list[0]]=='M' && this.MexString[list[1]]=='E' && this.MexString[list[2]]=='X')
                this.MEXvalue=this.MEXLIST.map(list => mex(...(list.map(idx => Number(this.valuelist[idx])))))
                this.MEXSUM=0
                this.MEXvalue.forEach(element => {
                    this.MEXSUM = this.MEXSUM + element
                });
            }
        }
    }
}
})