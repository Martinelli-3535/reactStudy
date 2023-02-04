interface Mobile<T> {
    name: string;
    price : number;
    option : T;    
}

const m1 : Mobile<object> = {
    name: "s21",
    price : 1000,
    option : {
        color: "red",
        coupon: false,
    },
};

const m2 : Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good"
}