class StructureDonnee {
  key: string;
  structures: StructureDonnee[];
  donnees: DonneeAffichable[];
}

interface DonneeAffichable {
  value: () => string;
}

interface BlocRepositoryService {
  getBloc: (id: string) => string;
  findBlocId: (blocTag: string) => string;
}

const iterate = (
  blocRepositoryService: BlocRepositoryService,
  element: string,
  data?: StructureDonnee,
  maxIterations = 1
): Node[] => {
  const nodes: Node[] = [];
  for (let i = 0; i < maxIterations; i++) {
    if (element.startsWith("<bloc")) {
      const bloc = blocRepositoryService.getBloc(
        blocRepositoryService.findBlocId(element)
      );
      nodes.push(monterBloc(blocRepositoryService, bloc, data));
    } else {
      nodes.push(monterElement(element, data));
    }
  }
  return nodes;
};

const monterBloc = (
  blocRepositoryService: BlocRepositoryService,
  bloc: string,
  data?: StructureDonnee
): Node => {
  //<tag><bloc id="?" />|@{}|#{}</tag>
  //
  const node = parseBloc();
};

const parseBloc = (
  blocRepositoryService: BlocRepositoryService,
  bloc: string,
  data?: StructureDonnee,
  rootNode?: Node
) => {
  //bloc
  if (bloc.startsWith("<bloc")) {
  }
  //tag
  else if (bloc.startsWith("<")) {
  }
  //directive
  else if (bloc.startsWith("@{")) {
  }
  //data
  else if (bloc.startsWith("#{")) {
  }
  throw Error(`la chaine ${bloc} a un format inattendu
    les chaines bloc peuvent débuter par 
    '<bloc':= bloc
    '<':= html tag
    '@{':= directive
    '#{':= valeur`);
};

const injecterData = (element: string, data?: StructureDonnee): string => {
  return "";
};

const monterElement = (element: string, data?: StructureDonnee): Node => {
  const wraper = document.createElement("div");
  if (element.includes("#{")) {
    wraper.innerHTML = injecterData(element, data);
  } else {
    wraper.innerHTML = element;
  }
  return wraper.firstChild ?? wraper;
};

//recois un Array DonneeAffichable
const adresseDestinataireBloc = `<div>@{iterate('<p>#{adresse}</p>',7)}`;
