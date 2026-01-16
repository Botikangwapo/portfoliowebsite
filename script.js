const _0x4f2e=[
".darkmode",".lightmode",".darkmode-body",".modes",".modal",".theme-loader",
"show","hide","click","classList","toggle","remove","add",
"dark-mode","active","stopPropagation","load","hidden","auto",".preloader"
];

const _0x1a=document.querySelector(_0x4f2e[0]),
      _0x2b=document.querySelector(_0x4f2e[1]),
      _0x3c=document.querySelector(_0x4f2e[2]),
      _0x4d=document.querySelector(_0x4f2e[3]),
      _0x5e=document.querySelector(_0x4f2e[4]),
      _0x6f=document.querySelector(_0x4f2e[5]),
      _0x7g=document.body,
      _0x8h=document.documentElement;

function _0xa1(){
    _0x5e[_0x4f2e[9]][_0x4f2e[10]](_0x4f2e[6]);
}

function _0xb2(){
    _0x5e[_0x4f2e[9]][_0x4f2e[11]](_0x4f2e[6]);
}

_0x4d.addEventListener(_0x4f2e[8],e=>{
    e[_0x4f2e[15]]();
    _0xa1();
});

document.addEventListener(_0x4f2e[8],()=>{
    _0xb2();
});

_0x2b.addEventListener(_0x4f2e[8],e=>{
    _0x7g[_0x4f2e[9]][_0x4f2e[11]](_0x4f2e[13]);
    _0x3c[_0x4f2e[9]][_0x4f2e[11]](_0x4f2e[14]);
    e[_0x4f2e[15]]();
});

_0x1a.addEventListener(_0x4f2e[8],e=>{
    _0x7g[_0x4f2e[9]][_0x4f2e[12]](_0x4f2e[13]);
    _0x3c[_0x4f2e[9]][_0x4f2e[12]](_0x4f2e[14]);
    e[_0x4f2e[15]]();
});

window.addEventListener(_0x4f2e[16],()=>{
    const _0xc3=document.querySelector(_0x4f2e[19]);
    _0x8h.style.overflow=_0x4f2e[17];
    _0x7g.style.overflow=_0x4f2e[17];

    setTimeout(()=>{
        _0xc3[_0x4f2e[9]][_0x4f2e[12]](_0x4f2e[7]);
        _0x8h.style.overflow=_0x4f2e[18];
        _0x7g.style.overflow=_0x4f2e[18];
    },3200);
});

const click = document.getElementById('click');
const certBtn = document.querySelector('.modal-cert');

click.addEventListener('click', ()=>{
    certBtn.classList.toggle('show');
});