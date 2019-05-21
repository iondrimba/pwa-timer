import React, { useEffect, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  span {
    font-family: bebas_neueregular;
  }

  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    margin: 0 14px;
    overflow: hidden;
    height: inherit;
    width: 20%;
    text-align: center;
    align-items: center;

    span {
      position: absolute;
      user-select: none;
    }
  }

  .current {
    font-size:70px;
    transform: translateY(85px);
  }

  .prev {
    font-size: 40px;
    opacity: 0.5;
    transform: translateY(45px);
  }

  .prevHidden {
    font-size: 40px;
    opacity: 0.05;
    transform: translateY(0);
  }

  .next {
    font-size: 40px;
    opacity: 0.5;
    transform: translateY(159px);
  }

  .nextHidden {
    font-size: 40px;
    opacity: 0.05;
    transform: translateY(204px);
  }
`

declare var TweenMax: any;
declare var Back: any;

const formatDecimal = (number: number): string => {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

const Numbers = (props: any) => {
  const wrapper:any = useRef(null);

  useEffect(() => {
    props.elements.map((el: any, index: any) => {
      const elmts = [...wrapper.current.querySelectorAll('.numbers span')];

      TweenMax.to(elmts[index], .3, {
        transform: `translateY(${props.positions[el.index].pos}px)`,
        fontSize: el.index == 2 ? 70 : 40,
        ease: Back.easeOut.config(1.7), y: -500,
        opacity: el.index < 1 || el.index >= props.positions.length - 1 ? .03 : el.index == 2 ? 1 : .3,
        onComplete: (y: any, t: any) => {
          elmts[y].setAttribute('data-id', props.positions[el.index].pos);

          if (y === props.positions.length - 1) {
            const a: any = wrapper.current.querySelector(`[data-id="${props.positions[props.positions.length - 2].pos}"]`);
            const b: any = wrapper.current.querySelector(`[data-id="${props.positions[props.positions.length - 1].pos}"]`);

            b.textContent = `${formatDecimal(Number(a.textContent) + 1 > 59 ? 0 : Number(a.textContent) + 1)}`;
          }
        },
        onCompleteParams: [index, el]
      });
    });

    return () => { }
  }, [props.elements]);


  return (
    <>
      <GlobalStyle />
      <div ref={wrapper} className="numbers">
        {
          props.elements.map((item: any) => {
            return <span key={item.pos} data-id={item.text} className={item.style}>{formatDecimal(item.text)}</span>
          })
        }
      </div>
    </>
  )
};

export default Numbers;
