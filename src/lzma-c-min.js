var e=function(){"use strict";function r(e){function r(){}return et=r.prototype=e||new ct,r}function t(e,r){postMessage({action:tt,cbn:r,result:e})}function n(e){var r=[];return r[e-1]=void 0,r}function s(e,r){var t,n;return t=e[1]+r[1],n=e[0]+r[0],_(n,t)}function o(e,r){return u(~~Math.max(Math.min(e[1]/st,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/st,2147483647),-2147483648),f(e)&f(r))}function i(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],n=0>r[1],t&&!n?-1:!t&&n?1:l(e,r)[1]<0?-1:1)}function _(e,r){var t,n;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%st,n=Math.floor(e/st)*st,r=r-t+n,e=e-n+t;0>e;)e+=st,r-=st;for(;e>4294967295;)e-=st,r+=st;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function a(e,r){return e[0]==r[0]&&e[1]==r[1]}function c(e){return e>=0?[e,0]:[e+st,-st]}function f(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-st,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function u(e,r){var t,n;return t=e*st,n=r,0>r&&(n+=st),[n,t]}function m(e){var r,t;return a(e,it)?it:(r=-e[1],t=-e[0],t>4294967295&&(t-=st,r+=st),0>t&&(t+=st,r-=st),[t,r])}function p(e){return 30>=e?1<<e:p(30)*p(e-30)}function d(e,r){var t,n,s,o;return r&=63,a(e,it)?0==r?e:_t:0>e[1]?m(d(m(e),r)):(o=p(r),n=e[1]*o%0x10000000000000000,s=e[0]*o,t=s-s%st,n+=t,s-=t,n>=0x8000000000000000&&(n-=0x10000000000000000),[s,n])}function h(e,r){var t,n,s;return r&=63,s=p(r),t=e[1]/s,n=Math.floor(e[0]/s),_(n,t)}function P(e,r){var t;return r&=63,t=h(e,r),0>e[1]&&(t=s(t,d([2,0],63-r))),t}function l(e,r){var t,n;return t=e[1]-r[1],n=e[0]-r[0],_(n,t)}function v(e,r){return e.dc=r,e.gc=0,e.ub=r.length,e}function B(e,r,t,n){return e.gc>=e.ub?-1:(n=Math.min(n,e.ub-e.gc),g(e.dc,e.gc,r,t,n),e.gc+=n,n)}function k(e){return e.dc=n(32),e}function S(e){var r=e.dc;return r.length=e.ub,r}function b(e,r){e.dc[e.ub++]=r<<24>>24}function M(e,r,t,n){g(r,t,e.dc,e.ub,n),e.ub+=n}function E(e,r,t,n,s){var o;for(o=r;t>o;++o)n[s++]=e.charCodeAt(o)}function g(e,r,t,n,s){for(var o=0;s>o;++o)t[n+o]=e[r+o]}function y(e,r){mr(r,1<<e.ds),r.j=e.fb,dr(r,e.mf),pr(r,e.lc,e.lp,e.pb)}function R(e,r,t,n,s){var o,_;if(i(n,ot)<0)throw Error("invalid length "+n);for(e.hc=n,o=$(new St),y(s,o),o.Xb=1,hr(o,t),_=0;64>_;_+=8)b(t,255&f(h(n,_)));e.ac=(o.N=0,o.Ib=r,o.Gb=0,X(o),o.d.cc=t,_r(o),rr(o),er(o),o.P.ab=o.j+1-2,yr(o.P,1<<o.O),o.f.ab=o.j+1-2,yr(o.f,1<<o.O),void(o.x=_t),j(new Bt,o))}function F(e,r,t){return e.ec=k(new pt),R(e,v(new ut,r),e.ec,c(r.length),t),e}function L(e,r,t,s){var o;e.Pb=r,e.zb=t,o=r+t+s,(null==e.c||e.mb!=o)&&(e.c=null,e.mb=o,e.c=n(e.mb)),e.B=e.mb-t}function w(e,r){return e.c[e.e+e.v+r]}function z(e,r,t,n){var s,o;for(e.L&&e.v+r+n>e.q&&(n=e.q-(e.v+r)),++t,o=e.e+e.v+r,s=0;n>s&&e.c[o+s]==e.c[o+s-t];++s);return s}function C(e){return e.q-e.v}function x(e){var r,t,n;for(n=e.e+e.v-e.Pb,n>0&&--n,t=e.e+e.q-n,r=0;t>r;++r)e.c[r]=e.c[n+r];e.e-=n}function D(e){var r;++e.v,e.v>e.kb&&(r=e.e+e.v,r>e.B&&x(e),I(e))}function I(e){var r,t,n;if(!e.L)for(;;){if(n=-e.e+e.mb-e.q,0==n)return;if(r=B(e.$b,e.c,e.e+e.q,n),-1==r)return e.kb=e.q,t=e.e+e.kb,t>e.B&&(e.kb=e.B-e.e),void(e.L=1);e.q+=r,e.q>=e.v+e.zb&&(e.kb=e.q-e.zb)}}function A(e,r){e.e+=r,e.kb-=r,e.v-=r,e.q-=r}function O(e,r,t,s,o){var i,_,a;1073741567>r&&(e.Ub=16+(s>>1),a=~~((r+t+s+o)/2)+256,L(e,r+t,s+o,a),e.cb=s,i=r+1,e.l!=i&&(e.F=n(2*(e.l=i))),_=65536,e.gb&&(_=r-1,_|=_>>1,_|=_>>2,_|=_>>4,_|=_>>8,_>>=1,_|=65535,_>16777216&&(_>>=1),e.Vb=_,++_,_+=e.J),_!=e.Fb&&(e.eb=n(e.Fb=_)))}function H(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v,B,k,S,b;if(e.q>=e.v+e.cb)h=e.cb;else if(h=e.q-e.v,e.jb>h)return G(e),0;for(v=0,P=e.v>e.l?e.v-e.l:0,n=e.e+e.v,l=1,c=0,f=0,e.gb?(b=lt[255&e.c[n]]^255&e.c[n+1],c=1023&b,b^=(255&e.c[n+2])<<8,f=65535&b,u=(b^lt[255&e.c[n+3]]<<5)&e.Vb):u=255&e.c[n]^(255&e.c[n+1])<<8,s=e.eb[e.J+u]||0,e.gb&&(o=e.eb[c]||0,i=e.eb[1024+f]||0,e.eb[c]=e.v,e.eb[1024+f]=e.v,o>P&&e.c[e.e+o]==e.c[n]&&(r[v++]=l=2,r[v++]=e.v-o-1),i>P&&e.c[e.e+i]==e.c[n]&&(i==o&&(v-=2),r[v++]=l=3,r[v++]=e.v-i-1,o=i),0!=v&&o==s&&(v-=2,l=1)),e.eb[e.J+u]=e.v,k=(e.h<<1)+1,S=e.h<<1,p=d=e.s,0!=e.s&&s>P&&e.c[e.e+s+e.s]!=e.c[n+e.s]&&(r[v++]=l=e.s,r[v++]=e.v-s-1),t=e.Ub;;){if(P>=s||0==t--){e.F[k]=e.F[S]=0;break}if(a=e.v-s,_=(e.h>=a?e.h-a:e.h-a+e.l)<<1,B=e.e+s,m=d>p?p:d,e.c[B+m]==e.c[n+m]){for(;++m!=h&&e.c[B+m]==e.c[n+m];);if(m>l&&(r[v++]=l=m,r[v++]=a-1,m==h)){e.F[S]=e.F[_],e.F[k]=e.F[_+1];break}}(255&e.c[n+m])>(255&e.c[B+m])?(e.F[S]=s,S=_+1,s=e.F[S],d=m):(e.F[k]=s,k=_,s=e.F[k],p=m)}return G(e),v}function N(e){e.e=0,e.v=0,e.q=0,e.L=0,I(e),e.h=0,A(e,-1)}function G(e){var r;++e.h>=e.l&&(e.h=0),D(e),1073741823==e.v&&(r=e.v-e.l,T(e.F,2*e.l,r),T(e.eb,e.Fb,r),A(e,r))}function T(e,r,t){var n,s;for(n=0;r>n;++n)s=e[n]||0,t>=s?s=0:s-=t,e[n]=s}function W(e,r){e.gb=r>2,e.gb?(e.s=0,e.jb=4,e.J=66560):(e.s=2,e.jb=3,e.J=0)}function Y(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v;do{if(e.q>=e.v+e.cb)p=e.cb;else if(p=e.q-e.v,e.jb>p){G(e);continue}for(d=e.v>e.l?e.v-e.l:0,n=e.e+e.v,e.gb?(v=lt[255&e.c[n]]^255&e.c[n+1],_=1023&v,e.eb[_]=e.v,v^=(255&e.c[n+2])<<8,a=65535&v,e.eb[1024+a]=e.v,c=(v^lt[255&e.c[n+3]]<<5)&e.Vb):c=255&e.c[n]^(255&e.c[n+1])<<8,s=e.eb[e.J+c],e.eb[e.J+c]=e.v,P=(e.h<<1)+1,l=e.h<<1,u=m=e.s,t=e.Ub;;){if(d>=s||0==t--){e.F[P]=e.F[l]=0;break}if(i=e.v-s,o=(e.h>=i?e.h-i:e.h-i+e.l)<<1,h=e.e+s,f=m>u?u:m,e.c[h+f]==e.c[n+f]){for(;++f!=p&&e.c[h+f]==e.c[n+f];);if(f==p){e.F[l]=e.F[o],e.F[P]=e.F[o+1];break}}(255&e.c[n+f])>(255&e.c[h+f])?(e.F[l]=s,l=o+1,s=e.F[l],m=f):(e.F[P]=s,P=o,s=e.F[P],u=f)}G(e)}while(0!=--r)}function Z(e){return e-=2,4>e?e:3}function V(e){return 4>e?0:10>e?e-3:e-6}function j(e,r){return e.$=r,e.ic=null,e.bc=1,e}function K(e){if(!e.bc)throw Error("bad state");if(!e.$)throw Error("No decoding");return q(e),e.bc}function q(e){U(e.$,e.$.tb,e.$.Nb,e.$.Zb),e.Ob=e.$.tb[0],e.$.Zb[0]&&(ur(e.$),e.bc=0)}function J(e,r){var t,n,s,o;e.Y=r,s=e.a[r].n,n=e.a[r].g;do e.a[r].p&&(Dr(e.a[s]),e.a[s].n=s-1,e.a[r].Sb&&(e.a[s-1].p=0,e.a[s-1].n=e.a[r].n2,e.a[s-1].g=e.a[r].g2)),o=s,t=n,n=e.a[o].g,s=e.a[o].n,e.a[o].g=t,e.a[o].n=r,r=o;while(r>0);return e._=e.a[0].g,e.m=e.a[0].n}function Q(e){e.i=0,e.C=0;for(var r=0;4>r;++r)e.r[r]=0}function U(e,r,t,n){var o,_,u,m,p,d,h,P,v,B,k,S,b,M,E;if(r[0]=_t,t[0]=_t,n[0]=1,e.Ib&&(e.b.$b=e.Ib,N(e.b),e.N=1,e.Ib=null),!e.Gb){if(e.Gb=1,M=e.x,a(e.x,_t)){if(0==C(e.b))return void tr(e,f(e.x));cr(e),b=f(e.x)&e.u,Zr(e.d,e.z,(e.i<<4)+b,0),e.i=V(e.i),u=w(e.b,-e.o),wr(Fr(e.y,f(e.x),e.C),e.d,u),e.C=u,--e.o,e.x=s(e.x,at)}if(0==C(e.b))return void tr(e,f(e.x));for(;;){if(h=nr(e,f(e.x)),B=e._,b=f(e.x)&e.u,_=(e.i<<4)+b,1==h&&-1==B)Zr(e.d,e.z,_,0),u=w(e.b,-e.o),E=Fr(e.y,f(e.x),e.C),7>e.i?wr(E,e.d,u):(v=w(e.b,-e.r[0]-1-e.o),zr(E,e.d,v,u)),e.C=u,e.i=V(e.i);else{if(Zr(e.d,e.z,_,1),4>B){if(Zr(e.d,e.S,e.i,1),0==B?(Zr(e.d,e.Z,e.i,0),1==h?Zr(e.d,e.Q,_,0):Zr(e.d,e.Q,_,1)):(Zr(e.d,e.Z,e.i,1),1==B?Zr(e.d,e.qb,e.i,0):(Zr(e.d,e.qb,e.i,1),Zr(e.d,e.Mb,e.i,B-2))),1==h?e.i=7>e.i?9:11:(Mr(e.f,e.d,h-2,b),e.i=7>e.i?8:11),m=e.r[B],0!=B){for(d=B;d>=1;--d)e.r[d]=e.r[d-1];e.r[0]=m}}else{for(Zr(e.d,e.S,e.i,0),e.i=7>e.i?7:10,Mr(e.P,e.d,h-2,b),B-=4,S=lr(B),P=Z(h),Or(e.E[P],e.d,S),S>=4&&(p=(S>>1)-1,o=(2|1&S)<<p,k=B-o,14>S?Tr(e.pb,o-S-1,e.d,p,k):(Vr(e.d,k>>4,p-4),Nr(e.M,e.d,15&k),++e.rb)),m=B,d=3;d>=1;--d)e.r[d]=e.r[d-1];e.r[0]=m,++e.sb}e.C=w(e.b,h-1-e.o)}if(e.o-=h,e.x=s(e.x,c(h)),0==e.o){if(e.sb>=128&&rr(e),e.rb>=16&&er(e),r[0]=e.x,t[0]=Kr(e.d),0==C(e.b))return void tr(e,f(e.x));if(i(l(e.x,M),[4096,0])>=0)return e.Gb=0,void(n[0]=0)}}}}function X(e){var r,t;e.b||(r=new vt,t=4,0==e.K&&(t=2),W(r,t),e.b=r),Rr(e.y,e.V,e.W),(e.R!=e.hb||e.lb!=e.j)&&(O(e.b,e.R,4096,e.j,274),e.hb=e.R,e.lb=e.j)}function $(e){var r;for(e.r=n(4),e.a=[],e.d=new Lt,e.z=n(192),e.S=n(12),e.Z=n(12),e.qb=n(12),e.Mb=n(12),e.Q=n(192),e.E=[],e.pb=n(114),e.M=Ar(new Rt,4),e.P=Er(new Mt),e.f=Er(new Mt),e.y=new Et,e.k=[],e.I=[],e.X=[],e.Jb=n(16),e.t=n(4),e.G=n(4),e.tb=[_t],e.Nb=[_t],e.Zb=[0],e.Db=n(5),e.Qb=n(128),r=0;4096>r;++r)e.a[r]=new yt;for(r=0;4>r;++r)e.E[r]=Ar(new Rt,6);return e}function er(e){for(var r=0;16>r;++r)e.Jb[r]=Gr(e.M,r);e.rb=0}function rr(e){var r,t,n,s,o,i,_,a;for(s=4;128>s;++s)i=lr(s),n=(i>>1)-1,r=(2|1&i)<<n,e.Qb[s]=Wr(e.pb,r-i-1,n,s-r);for(o=0;4>o;++o){for(t=e.E[o],_=o<<6,i=0;e.yb>i;++i)e.I[_+i]=Hr(t,i);for(i=14;e.yb>i;++i)e.I[_+i]+=(i>>1)-1-4<<6;for(a=128*o,s=0;4>s;++s)e.X[a+s]=e.I[_+s];for(;128>s;++s)e.X[a+s]=e.I[_+lr(s)]+e.Qb[s]}e.sb=0}function tr(e,r){fr(e),Pr(e,r&e.u),jr(e.d)}function nr(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v,B,k,S,b,M,E,g,y,R,F,L,x,D,I,A,O,H,N,G,T,W,Y,Z,j,K,q,Q,U,X,$,er,rr,tr;if(e.Y!=e.m)return d=e.a[e.m].n-e.m,e._=e.a[e.m].g,e.m=e.a[e.m].n,d;if(e.m=e.Y=0,e.H?(p=e.ib,e.H=0):p=cr(e),F=e.A,y=C(e.b)+1,2>y)return e._=-1,1;for(y>273&&(y=273),Z=0,f=0;4>f;++f)e.t[f]=e.r[f],e.G[f]=z(e.b,-1,e.t[f],273),e.G[f]>e.G[Z]&&(Z=f);if(e.G[Z]>=e.j)return e._=Z,d=e.G[Z],ar(e,d-1),d;if(p>=e.j)return e._=e.k[F-1]+4,ar(e,p-1),p;if(a=w(e.b,-1),v=w(e.b,-e.r[0]-1-1),2>p&&a!=v&&2>e.G[Z])return e._=-1,1;if(e.a[0].Yb=e.i,H=r&e.u,e.a[1].w=Ft[e.z[(e.i<<4)+H]>>>2]+xr(Fr(e.y,r,e.C),e.i>=7,v,a),Dr(e.a[1]),B=Ft[2048-e.z[(e.i<<4)+H]>>>2],Y=B+Ft[2048-e.S[e.i]>>>2],v==a&&(j=Y+ir(e,e.i,H),e.a[1].w>j&&(e.a[1].w=j,Ir(e.a[1]))),m=p>=e.G[Z]?p:e.G[Z],2>m)return e._=e.a[1].g,1;e.a[1].n=0,e.a[0].Ab=e.t[0],e.a[0].Bb=e.t[1],e.a[0].xb=e.t[2],e.a[0].Lb=e.t[3],u=m;do e.a[u--].w=268435455;while(u>=2);for(f=0;4>f;++f)if(W=e.G[f],!(2>W)){G=Y+or(e,f,e.i,H);do o=G+gr(e.f,W-2,H),I=e.a[W],I.w>o&&(I.w=o,I.n=0,I.g=f,I.p=0);while(--W>=2)}if(g=B+Ft[e.S[e.i]>>>2],u=e.G[0]>=2?e.G[0]+1:2,p>=u){for(L=0;u>e.k[L];)L+=2;for(;c=e.k[L+1],o=g+sr(e,c,u,H),I=e.a[u],I.w>o&&(I.w=o,I.n=0,I.g=c+4,I.p=0),u!=e.k[L]||(L+=2,L!=F);++u);}for(t=0;;){if(++t,t==m)return J(e,t);if(k=cr(e),F=e.A,k>=e.j)return e.ib=k,e.H=1,J(e,t);if(++r,O=e.a[t].n,e.a[t].p?(--O,e.a[t].Sb?(q=e.a[e.a[t].n2].Yb,q=4>e.a[t].g2?7>q?8:11:7>q?7:10):q=e.a[O].Yb,q=V(q)):q=e.a[O].Yb,O==t-1?q=0==e.a[t].g?7>q?9:11:V(q):(e.a[t].p&&e.a[t].Sb?(O=e.a[t].n2,A=e.a[t].g2,q=7>q?8:11):(A=e.a[t].g,q=4>A?7>q?8:11:7>q?7:10),D=e.a[O],4>A?0==A?(e.t[0]=D.Ab,e.t[1]=D.Bb,e.t[2]=D.xb,e.t[3]=D.Lb):1==A?(e.t[0]=D.Bb,e.t[1]=D.Ab,e.t[2]=D.xb,e.t[3]=D.Lb):2==A?(e.t[0]=D.xb,e.t[1]=D.Ab,e.t[2]=D.Bb,e.t[3]=D.Lb):(e.t[0]=D.Lb,e.t[1]=D.Ab,e.t[2]=D.Bb,e.t[3]=D.xb):(e.t[0]=A-4,e.t[1]=D.Ab,e.t[2]=D.Bb,e.t[3]=D.xb)),e.a[t].Yb=q,e.a[t].Ab=e.t[0],e.a[t].Bb=e.t[1],e.a[t].xb=e.t[2],e.a[t].Lb=e.t[3],_=e.a[t].w,a=w(e.b,-1),v=w(e.b,-e.t[0]-1-1),H=r&e.u,n=_+Ft[e.z[(q<<4)+H]>>>2]+xr(Fr(e.y,r,w(e.b,-2)),q>=7,v,a),M=e.a[t+1],S=0,M.w>n&&(M.w=n,M.n=t,M.g=-1,M.p=0,S=1),B=_+Ft[2048-e.z[(q<<4)+H]>>>2],Y=B+Ft[2048-e.S[q]>>>2],v!=a||t>M.n&&0==M.g||(j=Y+(Ft[e.Z[q]>>>2]+Ft[e.Q[(q<<4)+H]>>>2]),M.w>=j&&(M.w=j,M.n=t,M.g=0,M.p=0,S=1)),R=C(e.b)+1,R=R>4095-t?4095-t:R,y=R,!(2>y)){if(y>e.j&&(y=e.j),!S&&v!=a&&(U=Math.min(R-1,e.j),P=z(e.b,0,e.t[0],U),P>=2)){for(Q=V(q),N=r+1&e.u,E=n+Ft[2048-e.z[(Q<<4)+N]>>>2]+Ft[2048-e.S[Q]>>>2],x=t+1+P;x>m;)e.a[++m].w=268435455;o=E+(X=gr(e.f,P-2,N),X+or(e,0,Q,N)),I=e.a[x],I.w>o&&(I.w=o,I.n=t+1,I.g=0,I.p=1,I.Sb=0)}for(K=2,T=0;4>T;++T)if(h=z(e.b,-1,e.t[T],y),!(2>h)){l=h;do{for(;t+h>m;)e.a[++m].w=268435455;o=Y+($=gr(e.f,h-2,H),$+or(e,T,q,H)),I=e.a[t+h],I.w>o&&(I.w=o,I.n=t,I.g=T,I.p=0)}while(--h>=2);if(h=l,0==T&&(K=h+1),R>h&&(U=Math.min(R-1-h,e.j),P=z(e.b,h,e.t[T],U),P>=2)){for(Q=7>q?8:11,N=r+h&e.u,s=Y+(er=gr(e.f,h-2,H),er+or(e,T,q,H))+Ft[e.z[(Q<<4)+N]>>>2]+xr(Fr(e.y,r+h,w(e.b,h-1-1)),1,w(e.b,h-1-(e.t[T]+1)),w(e.b,h-1)),Q=V(Q),N=r+h+1&e.u,b=s+Ft[2048-e.z[(Q<<4)+N]>>>2],E=b+Ft[2048-e.S[Q]>>>2],x=h+1+P;t+x>m;)e.a[++m].w=268435455;o=E+(rr=gr(e.f,P-2,N),rr+or(e,0,Q,N)),I=e.a[t+x],I.w>o&&(I.w=o,I.n=t+h+1,I.g=0,I.p=1,I.Sb=1,I.n2=t,I.g2=T)}}if(k>y){for(k=y,F=0;k>e.k[F];F+=2);e.k[F]=k,F+=2}if(k>=K){for(g=B+Ft[e.S[q]>>>2];t+k>m;)e.a[++m].w=268435455;for(L=0;K>e.k[L];)L+=2;for(h=K;;++h)if(i=e.k[L+1],o=g+sr(e,i,h,H),I=e.a[t+h],I.w>o&&(I.w=o,I.n=t,I.g=i+4,I.p=0),h==e.k[L]){if(R>h&&(U=Math.min(R-1-h,e.j),P=z(e.b,h,i,U),P>=2)){for(Q=7>q?7:10,N=r+h&e.u,s=o+Ft[e.z[(Q<<4)+N]>>>2]+xr(Fr(e.y,r+h,w(e.b,h-1-1)),1,w(e.b,h-(i+1)-1),w(e.b,h-1)),Q=V(Q),N=r+h+1&e.u,b=s+Ft[2048-e.z[(Q<<4)+N]>>>2],E=b+Ft[2048-e.S[Q]>>>2],x=h+1+P;t+x>m;)e.a[++m].w=268435455;o=E+(tr=gr(e.f,P-2,N),tr+or(e,0,Q,N)),I=e.a[t+x],I.w>o&&(I.w=o,I.n=t+h+1,I.g=0,I.p=1,I.Sb=1,I.n2=t,I.g2=i+4)}if(L+=2,L==F)break}}}}}function sr(e,r,t,n){var s,o=Z(t);return s=128>r?e.X[128*o+r]:e.I[(o<<6)+vr(r)]+e.Jb[15&r],s+gr(e.P,t-2,n)}function or(e,r,t,n){var s;return 0==r?(s=Ft[e.Z[t]>>>2],s+=Ft[2048-e.Q[(t<<4)+n]>>>2]):(s=Ft[2048-e.Z[t]>>>2],1==r?s+=Ft[e.qb[t]>>>2]:(s+=Ft[2048-e.qb[t]>>>2],s+=Qr(e.Mb[t],r-2))),s}function ir(e,r,t){return Ft[e.Z[r]>>>2]+Ft[e.Q[(r<<4)+t]>>>2]}function _r(e){Q(e),qr(e.d),Yr(e.z),Yr(e.Q),Yr(e.S),Yr(e.Z),Yr(e.qb),Yr(e.Mb),Yr(e.pb),Lr(e.y);for(var r=0;4>r;++r)Yr(e.E[r].bb);Sr(e.P,1<<e.O),Sr(e.f,1<<e.O),Yr(e.M.bb),e.H=0,e.Y=0,e.m=0,e.o=0}function ar(e,r){r>0&&(Y(e.b,r),e.o+=r)}function cr(e){var r=0;return e.A=H(e.b,e.k),e.A>0&&(r=e.k[e.A-2],r==e.j&&(r+=z(e.b,r-1,e.k[e.A-1],273-r))),++e.o,r}function fr(e){e.b&&e.N&&(e.b.$b=null,e.N=0)}function ur(e){fr(e),e.d.cc=null}function mr(e,r){e.R=r;for(var t=0;r>1<<t;++t);e.yb=2*t}function pr(e,r,t,n){e.V=t,e.W=r,e.O=n,e.u=(1<<n)-1}function dr(e,r){var t=e.K;e.K=r,e.b&&t!=e.K&&(e.hb=-1,e.b=null)}function hr(e,r){e.Db[0]=9*(5*e.O+e.V)+e.W<<24>>24;for(var t=0;4>t;++t)e.Db[1+t]=e.R>>8*t<<24>>24;M(r,e.Db,0,5)}function Pr(e,r){if(e.Xb){Zr(e.d,e.z,(e.i<<4)+r,1),Zr(e.d,e.S,e.i,0),e.i=7>e.i?7:10,Mr(e.P,e.d,0,r);var t=Z(2);Or(e.E[t],e.d,63),Vr(e.d,67108863,26),Nr(e.M,e.d,15)}}function lr(e){return 2048>e?kt[e]:2097152>e?kt[e>>10]+20:kt[e>>20]+40}function vr(e){return 131072>e?kt[e>>6]+12:134217728>e?kt[e>>16]+32:kt[e>>26]+52}function Br(e,r,t,n){8>t?(Zr(r,e.U,0,0),Or(e.wb[n],r,t)):(t-=8,Zr(r,e.U,0,1),8>t?(Zr(r,e.U,1,0),Or(e.vb[n],r,t)):(Zr(r,e.U,1,1),Or(e.Eb,r,t-8)))}function kr(e){e.U=n(2),e.wb=n(16),e.vb=n(16),e.Eb=Ar(new Rt,8);for(var r=0;16>r;++r)e.wb[r]=Ar(new Rt,3),e.vb[r]=Ar(new Rt,3);return e}function Sr(e,r){Yr(e.U);for(var t=0;r>t;++t)Yr(e.wb[t].bb),Yr(e.vb[t].bb);Yr(e.Eb.bb)}function br(e,r,t,n,s){var o,i,_,a,c;for(o=Ft[e.U[0]>>>2],i=Ft[2048-e.U[0]>>>2],_=i+Ft[e.U[1]>>>2],a=i+Ft[2048-e.U[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[s+c]=o+Hr(e.wb[r],c)}for(;16>c;++c){if(c>=t)return;n[s+c]=_+Hr(e.vb[r],c-8)}for(;t>c;++c)n[s+c]=a+Hr(e.Eb,c-8-8)}function Mr(e,r,t,n){Br(e,r,t,n),0==--e.Kb[n]&&(br(e,n,e.ab,e.Tb,272*n),e.Kb[n]=e.ab)}function Er(e){return kr(e),e.Tb=[],e.Kb=[],e}function gr(e,r,t){return e.Tb[272*t+r]}function yr(e,r){for(var t=0;r>t;++t)br(e,t,e.ab,e.Tb,272*t),e.Kb[t]=e.ab}function Rr(e,r,t){var s,o;if(null==e.Cb||e.D!=t||e.db!=r)for(e.db=r,e.Wb=(1<<r)-1,e.D=t,o=1<<e.D+e.db,e.Cb=n(o),s=0;o>s;++s)e.Cb[s]=Cr(new gt)}function Fr(e,r,t){return e.Cb[((r&e.Wb)<<e.D)+((255&t)>>>8-e.D)]}function Lr(e){var r,t=1<<e.D+e.db;for(r=0;t>r;++r)Yr(e.Cb[r].fb)}function wr(e,r,t){var n,s,o=1;for(s=7;s>=0;--s)n=t>>s&1,Zr(r,e.fb,o,n),o=o<<1|n}function zr(e,r,t,n){var s,o,i,_,a=1,c=1;for(o=7;o>=0;--o)s=n>>o&1,_=c,a&&(i=t>>o&1,_+=1+i<<8,a=i==s),Zr(r,e.fb,_,s),c=c<<1|s}function Cr(e){return e.fb=n(768),e}function xr(e,r,t,n){var s,o,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(o=t>>_&1,s=n>>_&1,a+=Qr(e.fb[(1+o<<8)+i],s),i=i<<1|s,o!=s){--_;break}for(;_>=0;--_)s=n>>_&1,a+=Qr(e.fb[i],s),i=i<<1|s;return a}function Dr(e){e.g=-1,e.p=0}function Ir(e){e.g=0,e.p=0}function Ar(e,r){return e.T=r,e.bb=n(1<<r),e}function Or(e,r,t){var n,s,o=1;for(s=e.T;0!=s;)--s,n=t>>>s&1,Zr(r,e.bb,o,n),o=o<<1|n}function Hr(e,r){var t,n,s=1,o=0;for(n=e.T;0!=n;)--n,t=r>>>n&1,o+=Qr(e.bb[s],t),s=(s<<1)+t;return o}function Nr(e,r,t){var n,s,o=1;for(s=0;e.T>s;++s)n=1&t,Zr(r,e.bb,o,n),o=o<<1|n,t>>=1}function Gr(e,r){var t,n,s=1,o=0;for(n=e.T;0!=n;--n)t=1&r,r>>>=1,o+=Qr(e.bb[s],t),s=s<<1|t;return o}function Tr(e,r,t,n,s){var o,i,_=1;for(i=0;n>i;++i)o=1&s,Zr(t,e,r+_,o),_=_<<1|o,s>>=1}function Wr(e,r,t,n){var s,o,i=1,_=0;for(o=t;0!=o;--o)s=1&n,n>>>=1,_+=Ft[(2047&(e[r+i]-s^-s))>>>2],i=i<<1|s;return _}function Yr(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function Zr(e,r,t,n){var i,_=r[t];i=(e.nb>>>11)*_,0==n?(e.nb=i,r[t]=_+(2048-_>>>5)<<16>>16):(e.Rb=s(e.Rb,o(c(i),[4294967295,0])),e.nb-=i,r[t]=_-(_>>>5)<<16>>16),0==(-16777216&e.nb)&&(e.nb<<=8,Jr(e))}function Vr(e,r,t){for(var n=t-1;n>=0;--n)e.nb>>>=1,1==(r>>>n&1)&&(e.Rb=s(e.Rb,c(e.nb))),0==(-16777216&e.nb)&&(e.nb<<=8,Jr(e))}function jr(e){for(var r=0;5>r;++r)Jr(e)}function Kr(e){return s(s(c(e.ob),e.Hb),[4,0])}function qr(e){e.Hb=_t,e.Rb=_t,e.nb=-1,e.ob=1,e.fc=0}function Jr(e){var r,t=f(P(e.Rb,32));if(0!=t||i(e.Rb,[4278190080,0])<0){e.Hb=s(e.Hb,c(e.ob)),r=e.fc;do b(e.cc,r+t),r=255;while(0!=--e.ob);e.fc=f(e.Rb)>>>24}++e.ob,e.Rb=d(o(e.Rb,[16777215,0]),8)}function Qr(e,r){return Ft[(2047&(e-r^-r))>>>2]}function Ur(e){var r,t,n,s=[],o=0,i=e.length;if("object"==typeof e)return e;for(E(e,0,i,s,0),n=0;i>n;++n)r=s[n],r>=1&&127>=r?++o:o+=0==r||r>=128&&2047>=r?2:3;for(t=[],o=0,n=0;i>n;++n)r=s[n],r>=1&&127>=r?t[o++]=r<<24>>24:0==r||r>=128&&2047>=r?(t[o++]=(192|r>>6&31)<<24>>24,t[o++]=(128|63&r)<<24>>24):(t[o++]=(224|r>>12&15)<<24>>24,t[o++]=(128|r>>6&63)<<24>>24,t[o++]=(128|63&r)<<24>>24);return t}function Xr(e){return e[1]+e[0]}function $r(e,r,n,s){function o(){for(var e,r=(new Date).getTime();K(a.c.ac);)if(i=Xr(a.c.ac.Ob)/Xr(a.c.hc),(new Date).getTime()-r>200)return s?s(i):void 0!==_&&t(i,_),nt(o,0),0;s?s(1):void 0!==_&&t(1,_),e=S(a.c.ec),n?n(e):void 0!==_&&postMessage({action:rt,cbn:_,result:e})}var i,_,a={};"function"!=typeof n&&(_=n,n=s=0),a.c=F(new ht,Ur(e),wt(r)),s?s(0):void 0!==_&&t(0,_),nt(o,0)}var et,rt=1,tt=3,nt="function"==typeof setImmediate?setImmediate:setTimeout,st=4294967296,ot=[4294967295,-st],it=[0,-0x8000000000000000],_t=[0,0],at=[1,0],ct=r({}),ft=r(),ut=r(new ft);et.ub=0,et.gc=0;var mt=r(),pt=r(new mt);et.ub=0;var dt=r(),ht=r(new dt),Pt=r(),lt=function(){var e,r,t,n=[];for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;n[e]=t}return n}(),vt=r(new Pt),Bt=r(),kt=function(){var e,r,t,n=2,s=[0,1];for(t=2;22>t;++t)for(r=1<<(t>>1)-1,e=0;r>e;++e,++n)s[n]=t<<24>>24;return s}(),St=r();et.ib=0,et.K=1,et.A=0,et.lb=-1,et._=0;var bt=r(),Mt=r(new bt),Et=r();et.db=0,et.D=0,et.Wb=0;var gt=r(),yt=r(),Rt=r();et.T=0;var Ft=function(){var e,r,t,n,s=[];for(r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)s[t]=(r<<6)+(e-t<<6>>>9-r-1);return s}(),Lt=r(),wt=function(){var e=[{ds:16,fb:64,mf:0,lc:3,lp:0,pb:2},{ds:20,fb:64,mf:0,lc:3,lp:0,pb:2},{ds:19,fb:64,mf:1,lc:3,lp:0,pb:2},{ds:20,fb:64,mf:1,lc:3,lp:0,pb:2},{ds:21,fb:128,mf:1,lc:3,lp:0,pb:2},{ds:22,fb:128,mf:1,lc:3,lp:0,pb:2},{ds:23,fb:128,mf:1,lc:3,lp:0,pb:2},{ds:24,fb:255,mf:1,lc:3,lp:0,pb:2},{ds:25,fb:255,mf:1,lc:3,lp:0,pb:2}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r._b&&r._b.action==rt&&e.compress(r._b._b,r._b.jc,r._b.cbn)}}(),{compress:$r}}();this.LZMA=this.LZMA_WORKER=e;