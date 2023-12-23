interface EObject {
    id:number;
    entegrator: string;
    label:string;
    required:string[];
    
}

export const entegratorler: EObject[] = [
     {
      id: 1,
      label:"Uyumsoft",
      entegrator: "uyumsoft",
      required: ["username","password"],
    },
     {
      id: 2,
      label:"Smart",
      entegrator: "smart",
      required: [],
     },
    ]
    
    