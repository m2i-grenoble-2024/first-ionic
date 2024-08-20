# First Ionic

Un projet Ionic + Angular pour faire une application mobile hybride


## Rappels Angular
### Les Input
Il est très courant d'avoir besoin de faire passer des informations depuis un component parent vers un component enfant (le parent d'un component n'est pas toujours le même, il change selon le contexte, le parent c'est le component qui en appel un autre dans son template).

Pour pouvoir récupérer des informations depuis l'extérieur, un component peut définir une propriété avec un décorateur `@Input()`, ce qui indique que la valeur de cette propriété devra/pourra être fournie par le parent.

Exemple :
```ts
export class ParentComponent {
    person = {name:'Bobson', firstName:'Bobby'}
}
```
Le template du parent
```html
<!-- On peut appeler plusieurs fois le component ChildComponent en lui donnant
 des valeurs différents dans son input -->
    <app-child [firstName]="person.firstName"></app-child>
    <app-child firstName="Camilla"></app-child>
    <app-child firstName="Nuri"></app-child>
```

```ts
export class ChildComponent {
    @Input()
    firstName:string;
}
```
Le template de l'enfant
```html
<p>Hello, my name is {{firstName}}, how are you</p>
```
Ici l'enfant ne sait pas ce qu'il y a dans sa propriété firstName, mais il se charge de l'afficher quand même et c'est donc le parent qui lui indique la valeur.

Un input peut être rendu obligatoire en mettant en décorateur `@Input({required:true})`, on aura alors une erreur si on ne fournie pas de valeur à la propriété en question.

### Les Output
L'objectif des output est l'inverse des inputs : Faire passer des informations depuis un component enfant vers un component parent.

En réalité il s'agit d'event (comme click, dblclick, submit, etc.) mais que l'on défini nous même sur nos components. Tout comme ces events, le but est de faire que le component enfant puisse dire au parent "il s'est passé quelque chose, comment est-ce que tu veux réagir ?".

Concrétement on va définir une propriété avec un décorateur `@Output()`, cette propriété devra contenir un `new EventEmitter()` et on pourra s'en servir pour faire un `propriete.emit()` lorsque l'event est sensé être déclenché (et ça pour le coup ça dépend du component, par exemple on peut avoir un emit qui se déclenche quand un formulaire est validé, ou bien quand un bouton spécifique est cliqué, ou n'importe quoi d'autre).

Exemple: 
```ts
export class ChildComponent {
    @Ouput()
    validate = new EventEmitter();
    @Output()
    cancel = new EventEmitter();

}
```
Le template du Child
```html
<p>Voulez-vous vraiment faire ça ?</p>
<button (click)="validate.emit()">Valider</button>
<button (click)="cancel.emit()">Annuler</button>
```

Côté Parent
```ts
export class ParentComponent {

    handleValidate() {
        console.log('ok on valide !')
    }

    handleDelete() {
        alert('hola non')
    }
}
```
Template du Parent
```html
<app-child (validate)="handleValidate()" (cancel)="handleCancel()"></app-child>
```

Ici donc, l'enfant défini 2 events/output un où on valide, un où on annule, mais ce n'est pas l'enfant qui dit ce qui se passe dans un cas ou dans l'autre, il se contente d'emit un event qui sera intercepté par le parent et c'est le parent qui indique ce qu'il faudra exécuter en cas de validation ou d'annulation (ici avec des méthodes appelées handleValidate/handleCancel, mais elles pourraient s'appeler comme on veut)


### Les appels HTTP (via HttpClient)

Angular integre un composant HttpClient qui permet de réaliser des requêtes HTTP depuis le typescript (c'est globalement l'équivalent de fetch ou de axios, mais à la sauce angular).

En règle général, on regroupe les appels Http dans des services dédiés (un peu comme on regroupe les requêtes SQL dans des repository côté back).

Pour pouvoir utiliser le HttpClient dans des projets standalone (qui n'ont pas de module), on doit rajouter dans le [main.ts](src/main.ts), dans la liste des providers un `provideHttpClient()`

Ensuite pour pouvoir utiliser ce client, on doit l'injecter via le constructor du service où on s'en servira 
```ts
constructor(private http:HttpClient){}
```
On crée des méthodes dans notre service pour les différentes requêtes HTTP qu'on souhaite faire vers notre API

Exemple d'un fetchAll (en remplaçant `Entity` par le nom de l'entité qu'on récupère)
```ts
fetchAll() {
    return this.http.get<Entity[]>('lien-vers-le-backend');
}
```

Pour l'utiliser dans un component, on devra injecter le service via le constructor comme pour le HttpClient

```ts
constructor(private monService:MonService){}
```

Et ensuite on appel notre méthode là où on en a besoin en rajoutant bien un subscribe() pour lancer effectivement la requête et pour indiquer ce qu'on souhaite faire avec le résultat dans le component.

Exemple :

```ts
this.monService.fetchAll().subscribe(data => this.prop = data);
```