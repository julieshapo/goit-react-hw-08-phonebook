"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[674],{9467:function(n,e,r){r.d(e,{G:function(){return u}});var o,t=r(1413),i=r(4925),a=r(168),c=r(5867).ZP.button(o||(o=(0,a.Z)(["\n  font-size: 14px;\n  border-radius: 4px;\n  border: 1px solid ",";\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 8px;\n  color: ",";\n  background-color: ",";\n  margin-bottom: 30px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),s=r(184),d=["type","children"],u=function(n){var e=n.type,r=void 0===e?"submit":e,o=n.children,a=(0,i.Z)(n,d);return(0,s.jsx)(c,(0,t.Z)((0,t.Z)({type:r},a),{},{children:o}))}},3674:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var o,t,i,a,c,s,d,u,l,x,h,p,m=r(9434),f=r(6052),b=r(5218),g=r(5705),Z=r(6727),j=r(168),v=r(5867),w=v.ZP.h1(o||(o=(0,j.Z)(["\n  margin-bottom: 30px;\n"]))),P=(0,v.ZP)(g.l0)(t||(t=(0,j.Z)(["\n  max-width: 400px;\n  padding: 8px;\n  border: 1px solid #2a2a2a;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),y=v.ZP.label(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=(0,v.ZP)(g.gN)(a||(a=(0,j.Z)(["\n  font-size: 16px;\n"]))),z=(0,v.ZP)(g.Bc)(c||(c=(0,j.Z)(["\n  font-size: 14px;\n  color: ",";\n"])),(function(n){return n.theme.colors.error})),C=r(2286),_=r(9467),A=r(184),q=Z.Ry().shape({name:Z.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan").required("Required!"),number:Z.Z_().matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required!")}),I=function(){var n=(0,m.I0)(),e=(0,m.v9)(C.Af);return(0,A.jsxs)("div",{children:[(0,A.jsx)(w,{children:"Phonebook"}),(0,A.jsx)(g.J9,{initialValues:{name:"",number:""},validationSchema:q,onSubmit:function(r,o){e.find((function(n){return n.name===r.name}))?b.ZP.error("".concat(r.name," is already in contacts.")):(n((0,f.rE)(r,r.name)),o.resetForm())},children:(0,A.jsxs)(P,{children:[(0,A.jsxs)(y,{children:["Name",(0,A.jsx)(k,{name:"name",placeholder:"Jane Smith",autoComplete:"off"}),(0,A.jsx)(z,{name:"name",component:"span"})]}),(0,A.jsxs)(y,{children:["Number",(0,A.jsx)(k,{name:"number",placeholder:"111-11-11",autoComplete:"off"}),(0,A.jsx)(z,{name:"number",component:"span"})]}),(0,A.jsx)(_.G,{type:"submit",children:"Add contact"})]})})]})},N=v.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 10px;\n"]))),R=v.ZP.div(d||(d=(0,j.Z)(["\n  font-size: 14px;\n\n  @media screen and (min-width: 420px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 620px) {\n    font-size: 18px;\n  }\n"]))),B=v.ZP.button(u||(u=(0,j.Z)(["\n  font-size: 14px;\n  height: 24px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-weight: 700;\n  border: 1px solid ",";\n  background-color: ",";\n  color: ",";\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),E=function(n){var e=n.contact,r=e.name,o=e.number,t=e.id,i=(0,m.I0)();return(0,A.jsxs)(N,{children:[(0,A.jsxs)(R,{children:[r," : ",o]}),(0,A.jsx)(B,{onClick:function(){return i((0,f.GK)(t))},children:"Delete"})]})},F=v.ZP.div(l||(l=(0,j.Z)(["\n  max-width: 600px;\n  margin-right: auto;\n  padding: 15px;\n"]))),G=v.ZP.div(x||(x=(0,j.Z)(["\n  color: ",";\n  font-size: 16px;\n  margin-top: 30px;\n"])),(function(n){return n.theme.colors.error})),J=r(2791),K=r(3882),S=function(){var n=(0,m.v9)(C.jj),e=(0,m.v9)(C.xU),r=(0,m.v9)(C.zh),o=(0,m.I0)();return(0,J.useEffect)((function(){o((0,f.K2)())}),[o]),(0,A.jsxs)(F,{children:[(0,A.jsx)("h2",{children:"Contacts"}),e?(0,A.jsx)(K.Z,{}):(0,A.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(n){return(0,A.jsx)("li",{children:(0,A.jsx)(E,{contact:n})},n.id)}))}),!(null!==n&&void 0!==n&&n.length)&&!r&&!e&&(0,A.jsx)(G,{children:"There are no contacts in your Phonebook."}),r&&(0,A.jsx)(G,{children:r})]})},D=v.ZP.div(h||(h=(0,j.Z)(["\n  padding: 20px 0;\n"]))),T=v.ZP.input(p||(p=(0,j.Z)(["\n  margin: 10px;\n  :focus {\n    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);\n  }\n"]))),U=r(1634),L=function(){var n=(0,m.I0)(),e=(0,m.v9)(C.AD);return(0,A.jsx)(D,{children:(0,A.jsxs)("label",{children:["Find contact by name",(0,A.jsx)(T,{type:"text",name:"filter",value:e,onChange:function(e){n((0,U.f)(e.currentTarget.value.toLowerCase()))}})]})})},M=function(){var n=(0,m.I0)(),e=(0,m.v9)(C.xU);return(0,J.useEffect)((function(){n((0,f.K2)())}),[n]),(0,A.jsxs)("div",{children:[(0,A.jsx)("title",{children:"Your PhoneBook"}),(0,A.jsx)(I,{}),(0,A.jsx)(L,{}),(0,A.jsx)("div",{children:e&&"Request in progress..."}),(0,A.jsx)(S,{})]})}}}]);
//# sourceMappingURL=674.f7fffda2.chunk.js.map