import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogmessageComponent } from '../../dialogmessage/dialogmessage.component';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-randomaddition',
  templateUrl: './randomaddition.component.html',
  styleUrls: ['./randomaddition.component.css']
})
export class RandomadditionComponent implements OnInit {

  @ViewChild('myAudio') public myAudio!: ElementRef<HTMLAudioElement>
  firstNumber!: number
  secondNumber!: number
  sum!: number
  userAnswer!: number
  choices!: any[]
  showAnswer = false

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initValues()

  }

  initValues() {
    this.showAnswer = false
    var fn = Math.floor(Math.random() * 10)
    var sn = Math.floor(Math.random() * 10)

    this.firstNumber = fn
    this.secondNumber = sn
    this.sum = this.firstNumber + this.secondNumber

    this.choices = [
      this.sum
    ]

    this.setChoicesArr(this.choices)
    this.shuffle(this.choices)
  }

  setChoicesArr(array: any[]) {
    while (array.length != 6) {
      var val = Math.floor(Math.random() * 100)
      if (array.indexOf(val) === -1) array.push(val);
    }
  }

  wrongAnswer() {
    var arrVal = Math.floor(Math.random() * 100)
    return arrVal
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
    if (selected == this.sum) {
      const dialogRef = this._dialog.open(DialogmessageComponent, {
        data: {
          isCorrect: true,
          firstNumber: this.firstNumber,
          secondNumber: this.secondNumber,
          sum: this.sum,
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
          sum: this.sum,
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
