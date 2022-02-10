import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionsettingsService } from 'src/app/services/additionsettings.service';
import { DialogmessageComponent } from '../../dialogmessage/dialogmessage.component';

@Component({
  selector: 'app-randomsubtraction',
  templateUrl: './randomsubtraction.component.html',
  styleUrls: ['./randomsubtraction.component.css']
})
export class RandomsubtractionComponent implements OnInit {
  @ViewChild('myAudio') public myAudio!: ElementRef<HTMLAudioElement>
  firstNumber!: number
  secondNumber!: number
  difference!: number
  userAnswer!: number
  choices!: any[]
  showAnswer = false
  numberOfChoices=5
  level:number=0

  constructor(
    private _dialog: MatDialog,
    private _additionService:AdditionsettingsService
  ) { }

  ngOnInit(): void {
    this.initValues()
  }

  initValues() {
    this.showAnswer = false
    var fn = Math.floor(Math.random() * this._additionService.levels[this.level].multiplier)
    var sn = Math.floor(Math.random() * this._additionService.levels[this.level].multiplier)

    // Switches fn and sn so there's no negative value for an answer
    if(fn<sn){
      var x=fn
      fn=sn
      sn=x
    }
    this.firstNumber = fn
    this.secondNumber = sn
    
    this.difference = this.firstNumber - this.secondNumber

    this.choices = [
      this.difference
    ]

    this.setChoicesArr(this.choices)
    this.shuffle(this.choices)
  }

  setChoicesArr(array: any[]) {
    while (array.length != this.numberOfChoices) {
      var val = Math.floor(Math.random() * this._additionService.levels[this.level].choicesMultiplier)
      if ((array.indexOf(val) === -1) && (val<this._additionService.levels[this.level].answerLimiter)) array.push(val);
    }
  }


  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  selected(e: Event) {
    this.showAnswer = true
    this.myAudio.nativeElement.play()
    var selected = parseInt((e.target as HTMLDivElement).innerText)
    if (selected == this.difference) {
      const dialogRef = this._dialog.open(DialogmessageComponent, {
        data: {
          isCorrect: true,
          firstNumber: this.firstNumber,
          secondNumber: this.secondNumber,
          answer: this.difference,
          operator:"-",
          msg: "GOOD JOB!!!"
        },
        position: {
          bottom: "0"
        }
      })

      dialogRef.afterClosed().subscribe(() => {
        this.initValues()
      })
    } else {
      const dialogRef = this._dialog.open(DialogmessageComponent, {
        data: {
          selected:selected,
          isCorrect: false,
          firstNumber: this.firstNumber,
          secondNumber: this.secondNumber,
          difference: this.difference,
          msg: "Try again."
        },
        position: {
          bottom: "0"
        }
      })

      dialogRef.afterClosed().subscribe(() => {
        this.initValues()
      })
    }
  }
}
