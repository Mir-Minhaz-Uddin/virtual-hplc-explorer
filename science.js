// Ideal isocratic teaching model. Hypothetical analytes, no experimental calibration.
export const compounds=[{name:'A',color:'#d48b13',kref:1,S:3,area:1},{name:'B',color:'#9560cd',kref:2,S:3.6,area:.85},{name:'C',color:'#008d92',kref:3.6,S:4.2,area:1.1}];
export function model(flow=1,organic=40,plates=1600){const t0=1/flow;const peaks=compounds.map(c=>{const k=c.kref*10**(-c.S*(organic/100-.4)),tr=t0*(1+k),sigma=tr/Math.sqrt(plates);return {...c,area:c.area/flow,k,tr,sigma,width:4*sigma}});return {flow,organic,plates,t0,peaks,end:Math.max(...peaks.map(p=>p.tr+4*p.sigma))*1.08}}
export function signal(p,t){return p.area/(p.sigma*Math.sqrt(2*Math.PI))*Math.exp(-.5*((t-p.tr)/p.sigma)**2)}
export function resolution(a,b){return 2*(b.tr-a.tr)/(a.width+b.width)}
export const valvePorts={1:'Sample in',2:'Loop end 1',3:'Pump in',4:'To column',5:'Loop end 2',6:'To waste'};
export function valvePairs(inject){return inject?[[1,6],[2,3],[4,5]]:[[1,2],[3,4],[5,6]]}
