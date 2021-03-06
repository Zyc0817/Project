import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link } from 'react-router-dom' 
let img1 = require('../../../static/img/138012-20161016201652952-1050532278.png')
let arr = [img1]

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
        
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container float-left">
                        <img src={arr[0]} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span className="price float-left">￥{data.price}</span>
                            <span className="mumber float-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Item