import { TweenMax } from 'gsap'

type Info = {
  width: number
  height: number
}

type pagination = {
  container?: HTMLElement
  items?: HTMLElement[]
}

export default class {
  private _container: HTMLDivElement
  private _slides: HTMLLIElement[]
  private _pagination: pagination = {
    container: undefined,
    items: undefined
  }
  private _info: Info
  private _state: Boolean = true
  private _duration: Number = 1000
  private _active: number = 0

  constructor(public opts: any) {
    this._container = opts.container
    this._slides = Array.from(
      this._container.getElementsByClassName('js-slide')
    )
    if (opts._duration) this._duration = opts._duration

    if (opts.pagination) this.init_pagination(opts.pagination)

    this._info = {
      width: this._slides[0].clientWidth,
      height: this._slides[0].clientHeight
    }

    this.on()
  }

  private init_pagination(container) {
    const pagination_container = document.getElementsByClassName(container)[0]
    const children = Array.from(pagination_container.children)
    const pagination_items = children
      .map(child => {
        return child.dataset.item === '' ? child : false
      })
      .filter(child => child)

    this._pagination = {
      container: pagination_container,
      items: pagination_items
    }
  }

  resize() {
    this._info = {
      width: this._slides[0].clientWidth,
      height: this._slides[0].clientHeight
    }
  }

  goToNext() {
    this._active += 1
    this._state = false
    this.goTo(this._active)
  }

  goToPrev() {
    this._active -= 1
    this._state = false
    this.goTo(this._active)
  }

  private onMoved() {
    this._pagination.items.forEach((paginate, i) => {
      if (i === this._active) {
        paginate.classList.add('is-active')
      } else {
        paginate.classList.remove('is-active')
      }
    })
  }

  goTo(num: number) {
    this._active = num
    const moveY = this._info.height * this._active * -1

    TweenMax.to(this._container, this._duration / 1000, {
      transform: `translate3d(0,${moveY}px,0)`,
      onStart: () => {
        this.onMoved()
      },
      onComplete: () => {
        this._state = true
      }
    })

    this._slides.forEach((slide, i) => {
      if (i == this._active) {
        slide.classList.add('is-active')
        TweenMax.to(slide, this._duration / 1000, {
          opacity: 1
        })
      } else {
        slide.classList.remove('is-active')
        TweenMax.to(slide, this._duration / 2000, {
          opacity: 0
        })
      }
    })
  }

  private onWheel(evt) {
    const moveY = evt.deltaY
    if (moveY > 50 && this._state && this._active < this._slides.length - 1) {
      this.goToNext()
    } else if (moveY < -50 && this._state && this._active !== 0) {
      this.goToPrev()
    }
  }

  private on() {
    this.goTo(0)
    this._container.addEventListener('wheel', evt => this.onWheel(evt))
    this._container.addEventListener('touchstart', evt => {
      alert(evt)
    })
  }
}
