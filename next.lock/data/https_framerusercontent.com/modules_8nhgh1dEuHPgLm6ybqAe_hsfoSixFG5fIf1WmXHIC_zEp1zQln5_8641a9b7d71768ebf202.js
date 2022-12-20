// Generated by Framer (30f03e7)
import{jsx as _jsx}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,CycleVariantState,Image,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";const cycleOrder=["aHQuxQcp9","SYPpQD8sI"];const variantClassNames={aHQuxQcp9:"framer-v-d9l4g4",SYPpQD8sI:"framer-v-1rn6az1"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 2":"SYPpQD8sI",pizza:"aHQuxQcp9"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="aHQuxQcp9",radius:tW584E4HB=16,tap:CG_7Uikep,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"aHQuxQcp9",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapr4ldzk=activeVariantCallback(async(...args)=>{if(CG_7Uikep){const res=await CG_7Uikep(...args);if(res===false)return false;}});const onTap1da7a09=activeVariantCallback(async(...args)=>{if(CG_7Uikep){const res=await CG_7Uikep(...args);if(res===false)return false;}setVariant(CycleVariantState);});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-9RBxr",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,className:cx("framer-d9l4g4",className),"data-framer-name":"pizza","data-highlight":true,layoutDependency:layoutDependency,layoutId:"aHQuxQcp9",onTap:onTapr4ldzk,ref:ref,style:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:tW584E4HB,borderBottomRightRadius:tW584E4HB,borderTopLeftRadius:tW584E4HB,borderTopRightRadius:tW584E4HB,boxShadow:"0px 0.783403042740207px 0.783403042740207px -0.3571428571428571px rgba(0, 0, 0, 0.025), 0px 1.921069203717892px 1.921069203717892px -0.7142857142857142px rgba(0, 0, 0, 0.025), 0px 3.634293894850792px 3.634293894850792px -1.0714285714285714px rgba(0, 0, 0, 0.025), 0px 6.354858006016078px 6.354858006016078px -1.4285714285714284px rgba(0, 0, 0, 0.025), 0px 11.047367106821415px 11.047367106821415px -1.7857142857142858px rgba(0, 0, 0, 0.025), 0px 20.249728545774083px 20.249728545774083px -2.142857142857143px rgba(0, 0, 0, 0.025), 0px 40px 40px -2.5px rgba(0, 0, 0, 0.025)",...style},transition:transition,...addPropertyOverrides({SYPpQD8sI:{"data-framer-name":"Variant 2"}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:3456,intrinsicWidth:5184,pixelHeight:3456,pixelWidth:5184,src:new URL("assets/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href} 2048w, ${new URL("assets/4096/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href} 4096w, ${new URL("assets/aJXb6Z7w86CSALjYBQzOwTkPeds.jpg",import.meta.url).href} 5184w`},className:"framer-1anwbpw","data-highlight":true,layoutDependency:layoutDependency,layoutId:"sthtuEvJb",onTap:onTap1da7a09,transition:transition})})})});});const css=['.framer-9RBxr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-9RBxr * { box-sizing: border-box; }",".framer-9RBxr .framer-im0ks9 { display: block; }",".framer-9RBxr .framer-d9l4g4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 380px; will-change: transform; }",".framer-9RBxr .framer-1anwbpw { cursor: pointer; flex: none; height: 269px; overflow: hidden; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9RBxr .framer-d9l4g4 { gap: 0px; } .framer-9RBxr .framer-d9l4g4 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-9RBxr .framer-d9l4g4 > :first-child { margin-top: 0px; } .framer-9RBxr .framer-d9l4g4 > :last-child { margin-bottom: 0px; } }",".framer-9RBxr.framer-v-1rn6az1 .framer-1anwbpw { height: 405px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 269
 * @framerIntrinsicWidth 380
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SYPpQD8sI":{"layout":["fixed","auto"]}}}
 * @framerVariables {"tW584E4HB":"radius","CG_7Uikep":"tap"}
 */ const FramerzEp1zQln5=withCSS(Component,css);export default FramerzEp1zQln5;FramerzEp1zQln5.displayName="Elements/Card Copy 4";FramerzEp1zQln5.defaultProps={height:269,width:380};addPropertyControls(FramerzEp1zQln5,{variant:{options:["aHQuxQcp9","SYPpQD8sI"],optionTitles:["pizza","Variant 2"],title:"Variant",type:ControlType.Enum},tW584E4HB:{defaultValue:16,title:"Radius",type:ControlType.Number},CG_7Uikep:{title:"Tap",type:ControlType.EventHandler}});addFonts(FramerzEp1zQln5,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerzEp1zQln5","slots":[],"annotations":{"framerIntrinsicWidth":"380","framerContractVersion":"1","framerIntrinsicHeight":"269","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]},\"SYPpQD8sI\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerVariables":"{\"tW584E4HB\":\"radius\",\"CG_7Uikep\":\"tap\"}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./zEp1zQln5.map