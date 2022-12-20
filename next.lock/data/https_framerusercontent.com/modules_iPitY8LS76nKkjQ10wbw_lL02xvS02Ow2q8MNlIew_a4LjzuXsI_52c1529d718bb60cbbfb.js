// Generated by Framer (30f03e7)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,cx,RichText,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import*as sharedStyle from"https://framerusercontent.com/modules/4Nn7o79WfIB09KGUZt4A/9eMikNAXqzuIunGD5rT6/fVxnimdqP.js";const cycleOrder=["NvowDF504"];const variantClassNames={NvowDF504:"framer-v-d9bdb"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="NvowDF504",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"NvowDF504",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-1lfjr",sharedStyle.className,classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-d9bdb",className),"data-border":true,"data-framer-name":"Variant 1",layoutDependency:layoutDependency,layoutId:"NvowDF504",ref:ref,style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.08)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:"rgb(255, 255, 255)",...style},transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.h2,{className:"framer-styles-preset-1wml6uu","data-styles-preset":"fVxnimdqP",children:"Framer Demo"})}),className:"framer-10osp2q",layoutDependency:layoutDependency,layoutId:"ZYwtis2Aa",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-2u5t49","data-framer-name":"Title and Icon",layoutDependency:layoutDependency,layoutId:"kk2yNWHIA",transition:transition}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Um9ib3RvLXJlZ3VsYXI=","--framer-font-family":'"Roboto", sans-serif',"--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"About"})}),className:"framer-2serep",fonts:["GF;Roboto-regular"],layoutDependency:layoutDependency,layoutId:"KR55Hmb5E",style:{"--extracted-r6o4lv":"rgb(102, 102, 102)","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Um9ib3RvLXJlZ3VsYXI=","--framer-font-family":'"Roboto", sans-serif',"--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Contact"})}),className:"framer-1jzxvdl",fonts:["GF;Roboto-regular"],layoutDependency:layoutDependency,layoutId:"Zt9dPxtHu",style:{"--extracted-r6o4lv":"rgb(102, 102, 102)","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-330y4x","data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"P9omJLSPK",style:{backgroundColor:"rgb(34, 34, 34)",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8,boxShadow:"0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.14764), 0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)"},transition:transition,children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Um9ib3RvLXJlZ3VsYXI=","--framer-font-family":'"Roboto", sans-serif',"--framer-font-size":"14px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Signup"})}),className:"framer-3fx1wy",fonts:["GF;Roboto-regular"],layoutDependency:layoutDependency,layoutId:"Nv_pHUB1q",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})})]})})});});const css=['.framer-1lfjr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-1lfjr * { box-sizing: border-box; }",".framer-1lfjr .framer-dxhxzc { display: block; }",".framer-1lfjr .framer-d9bdb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 59px; justify-content: center; padding: 24px 24px 24px 24px; position: relative; width: min-content; }",".framer-1lfjr .framer-10osp2q { flex: none; height: 34px; position: relative; white-space: pre-wrap; width: 177px; word-break: break-word; word-wrap: break-word; }",".framer-1lfjr .framer-2u5t49 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 708px; }",".framer-1lfjr .framer-1qmbu9h { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; }",".framer-1lfjr .framer-2serep, .framer-1lfjr .framer-1jzxvdl { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",".framer-1lfjr .framer-330y4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; width: min-content; }",".framer-1lfjr .framer-3fx1wy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1lfjr .framer-d9bdb, .framer-1lfjr .framer-330y4x { gap: 0px; } .framer-1lfjr .framer-d9bdb > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-1lfjr .framer-d9bdb > :first-child, .framer-1lfjr .framer-330y4x > :first-child { margin-left: 0px; } .framer-1lfjr .framer-d9bdb > :last-child, .framer-1lfjr .framer-330y4x > :last-child { margin-right: 0px; } .framer-1lfjr .framer-330y4x > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 59
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]}}}
 */ const Framera4LjzuXsI=withCSS(Component,css);export default Framera4LjzuXsI;Framera4LjzuXsI.displayName="Navbar";Framera4LjzuXsI.defaultProps={height:59,width:1200};addFonts(Framera4LjzuXsI,[{family:"Roboto",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/a4LjzuXsI:default",url:"https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",weight:"400"},...sharedStyle.fonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Framera4LjzuXsI","slots":[],"annotations":{"framerIntrinsicHeight":"59","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"auto\",\"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicWidth":"1200"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./a4LjzuXsI.map