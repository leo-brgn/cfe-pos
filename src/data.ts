import { Megaphone, GraduationCap, Users, Scale, Landmark, Sparkles } from 'lucide-react';
export const modules = [
 {id:'comm',label:'CFE Comm',short:'Communication',icon:Megaphone,description:'Faire entendre notre voix, au plus près du terrain.',features:['Campagnes multicanales','Publications et validation éditoriale','Bibliothèque de contenus']},
 {id:'formation',label:'CFE Formation',short:'Formation',icon:GraduationCap,description:'Donner à chacun les moyens d’agir.',features:['Catalogue et sessions','Inscriptions et présence','Parcours et attestations']},
 {id:'adhesion',label:'CFE Adhésion',short:'Adhésion',icon:Users,description:'Accompagner chaque adhérent dans la durée.',features:['Parcours d’adhésion','Suivi des cotisations','Relation adhérent']},
 {id:'services',label:'CFE Services / Juridique',short:'Services & juridique',icon:Scale,description:'Écouter, conseiller et défendre.',features:['Demandes de service','Dossiers et pièces confidentielles','Suivi des échéances']},
 {id:'elus',label:'CFE Élus & Mandats',short:'Élus & mandats',icon:Landmark,description:'Soutenir celles et ceux qui nous représentent.',features:['Annuaire des élus','Mandats et renouvellements','Instances et territoires']},
 {id:'copilote',label:'CFE Copilote IA',short:'Copilote IA',icon:Sparkles,description:'Un appui au quotidien, toujours sous votre contrôle.',features:['Recherche documentaire sourcée','Aide à la rédaction','Validation humaine']},
] as const;
export type Task = {id:number;title:string;module:string;date:string;status:'À traiter'|'En cours'|'Terminé'};
export const initialTasks:Task[]=[
 {id:1,title:'Préparer la campagne de rentrée',module:'Communication',date:'25 sept. 2026',status:'En cours'},
 {id:2,title:'Valider la session « Premiers pas d’élu »',module:'Formation',date:'28 sept. 2026',status:'À traiter'},
 {id:3,title:'Mettre à jour le guide d’accueil',module:'Adhésion',date:'30 sept. 2026',status:'À traiter'},
 {id:4,title:'Finaliser le calendrier des instances',module:'Élus & mandats',date:'02 oct. 2026',status:'Terminé'},
];
