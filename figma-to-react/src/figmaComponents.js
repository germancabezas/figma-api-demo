import React, { PureComponent } from 'react';
import { Ccard } from './components/Ccard';

export class Mastercard extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <Ccard {...this.props} nodeId="1:2" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:2") return Ccard1D2;
  return null;
}

class Ccard1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:4"
            style={{"marginLeft":16,"width":324,"minWidth":324,"height":null,"marginTop":19,"marginBottom":19,"minHeight":160,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="1:3"
                  style={{"marginLeft":12,"width":79,"minWidth":79,"height":null,"marginTop":11,"marginBottom":122,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":22,"fontWeight":700,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    {this.props.header && this.props.header.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                    {!this.props.header && (<div>
                      <span style={{}} key="end">Header</span>
                    </div>)}
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="1:5"
                  style={{"marginLeft":12,"width":300,"minWidth":300,"height":null,"marginTop":-106,"marginBottom":11,"minHeight":95,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    {this.props.description && this.props.description.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                    {!this.props.description && (<div>
                      <span style={{}} key="end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt.</span>
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

