import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { 
    
  }

  postsList: Post[];

  private postMessage = "Frugality blogs have really taken off in the past 3 years, mainly down to the state of the global economy. Saving money and being frugal with your wages is extremely popular as people have less and less money these days after paying rent, mortgage, bills etc.";

  ngOnInit() {
    this.postsList = [
      new Post(
        "La Maison de la mort Bande-annonce VO",
        "Alors qu’ils traversent une région isolée du pays de Galles, M. et Mme Waverton et leur ami Philip sont pris dans une terrible tempête. Ils trouvent refuge dans une vieille demeure. À mesure que la nuit s’installe, l’atmosphère se fait de plus en plus pesante entre les hôtes et leurs invités.",
        2
      ),
      new Post(
        "Rambo: Last Blood Bande-annonce VF",
        "Cinquième épisode de la saga Rambo. Vétéran de la Guerre du Vietnam, John Rambo va affronter un cartel mexicain après l'enlèvement de la fille d'un ami.",
        -1
      ),
      new Post(
        "Abominable Bande-annonce (2) VF",
        "Tout commence sur le toit d’un immeuble à Shanghai, avec l’improbable rencontre d’une jeune adolescente, l’intrépide Yi avec un jeune Yeti. La jeune fille et ses amis Jin et Peng vont tenter de ramener chez lui celui qu’ils appellent désormais Everest, leur nouvel et étrange ami, afin qu’il puisse retrouver sa famille sur le toit du monde...",
        3
      )
    ];
  }

}
