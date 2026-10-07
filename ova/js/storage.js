// storage.js — guarda y carga el progreso del estudiante
const KEY = 'sdia_progress';
function getProgress(){
  try{ return JSON.parse(localStorage.getItem(KEY)) || {} }catch{ return {} }
}
function saveProgress(data){
  localStorage.setItem(KEY, JSON.stringify(data));
}
function setModuleDone(m){
  const p = getProgress(); p['modulo'+m]=true; saveProgress(p);
}
function isModuleDone(m){ return !!getProgress()['modulo'+m]; }
function getProgressPercent(){
  const p=getProgress(); let d=0;
  if(p.diagnostico) d++;
  if(p.modulo1) d++;
  if(p.modulo2) d++;
  if(p.modulo3) d++;
  if(p.diagnostico && p.modulo1 && p.modulo2 && p.modulo3) d++;
  return Math.round(d/5*100);
}
