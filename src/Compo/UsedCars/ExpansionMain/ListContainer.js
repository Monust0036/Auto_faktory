import React from 'react';
import List from './List';

const createFakeDataSource = () => {
    let data = [{
        "id":1,
        "title":"Hyundai",
        "items":
            [{
                "id":1,
                "name":"Accent",
                "value":"Hyundai Accent"
            },
            {
                "id":2,
                "name":"Accent Viva",
                "value":"Hyundai Accent Viva"
            },
            {
                "id":3,
                "name":"Aura",
                "value":"Hyundai Aura"
            },
            {
                "id":4,
                "name":"Creta",
                "value":"Hyundai Creta"
            },
            {
                "id":5,
                "name":"Grand i 10",
                "value":"Hyundai Grand i 10"
            },
            {
                "id":6,
                "name":"i10",
                "value":"Hyundai i10"
            },
            {
                "id":7,
                "name":"i20",
                "value":"Hyundai i20"
            },
        ]

    },
    {
        "id":2,
        "title":"Maruti Suzuki",
        "items":
            [{
                "id":1,
                "name":"800",
                "value":"Maruti Suzuki 800"
            },
            {
                "id":2,
                "name":"Alto",
                "value":"Maruti Suzuki Alto"
            },
            {
                "id":3,
                "name":"Alto 800",
                "value":"Maruti Suzuki Alto 800"
            },
            {
                "id":4,
                "name":"Alto K10",
                "value":"Maruti Suzuki Alto K10"
            }]

    },
    {
        "id":3,
        "title":"Honda",
        "items":
            [{
                "id":1,
                "name":"Accord",
                "value":"Honda Accord"
            },
            {
                "id":2,
                "name":"Amaze",
                "value":"Honda Amaze"
            },
            {
                "id":3,
                "name":"Brio",
                "value":"Honda Brio"
            },
            {
                "id":4,
                "name":"City",
                "value":"Honda City"
            }]

    }];

    
    return data;
};

class ListContainer extends React.Component {
    state = {
        checkedItems: {},
        source: createFakeDataSource()
    };
    handleCheckItem = (list,item,e) => {
        let {checkedItems} = this.state;
        let {value} = e.target;
        if (checkedItems[value] === undefined) {
            checkedItems[value] = value;
        } else {
            delete checkedItems[value];
        }

        this.setState({checkedItems});
        this.props.getCarNameFilter(list,item,e)
    };

    render() {
        return <React.Fragment>
            {
                this.state.source.map(list =>
                    <List
                        checkedItems={this.state.checkedItems}
                        onCheckItem={this.handleCheckItem}
                        key={list.id}
                        list={list}/>)
            }
        </React.Fragment>
    }
};

export default ListContainer;