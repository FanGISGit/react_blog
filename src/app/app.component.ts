import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  //a_date = new Date();
  
  posts = [
    {
      title: 'Mon premier post',
	  content: "Content d'écrire un post, j'ajoute du texte pour savoir comment va se passer le retour à la ligne.",
	  created_at: new Date(2018,8,15,12,1),
	  loveIts: -2,
    },
    {
      title: 'Mon second post',
	  content: "Content d'écrire un second post",
	  created_at: new Date(2018,7,15,15,51),
	  loveIts: 0,
    },
    {
      title: 'Mon troisième post',
	  content: "Content d'écrire un troisième post",
	  created_at: new Date(),
	  loveIts: 2,
    }
  ];
  

}
