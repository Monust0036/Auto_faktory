import React from 'react';
import List from './List';

const createFakeDataSource = () => {
    let data = [{
        "id":1,
        "title":"Hyundai",
        "checked":false,
        "items":
            [{
                "id":1,
                "name":"Accent",
                "checked":false,
                "value":"Hyundai Accent"
            },
            {
                "id":2,
                "name":"Accent Viva",
                "checked":false,
                "value":"Hyundai Accent Viva"
            },
            {
                "id":3,
                "name":"Aura",
                "checked":false,
                "value":"Hyundai Aura"
            },
            {
                "id":4,
                "name":"Creta",
                "checked":false,
                "value":"Hyundai Creta"
            },
            {
                "id":5,
                "name":"Grand i10",
                "checked":false,
                "value":"Hyundai Grand i 10"
            },
            {
                "id":6,
                "name":"i10",
                "checked":false,
                "value":"Hyundai i10"
            },
            {
                "id":7,
                "name":"i20",
                "checked":false,
                "value":"Hyundai i20"
            },
        ]

    },
    {
        "id":2,
        "title":"Maruti Suzuki",
        "checked":false,
        "items":
            [{
                "id":1,
                "name":"800",
                "checked":false,
                "value":"Maruti Suzuki 800"
            },
            {
                "id":2,
                "name":"Alto",
                "checked":false,
                "value":"Maruti Suzuki Alto"
            },
            {
                "id":3,
                "name":"Alto 800",
                "checked":false,
                "value":"Maruti Suzuki Alto 800"
            },
            {
                "id":4,
                "name":"Alto K10",
                "checked":false,
                "value":"Maruti Suzuki Alto K10"
            },
            {
                "id":6,
                "name":"Wagon R",
                "checked":false,
                "value":"Maruti Suzuki Wagon R"
            },
            {
                "id":5,
                "name":"Swift",
                "checked":false,
                "value":"Maruti Suzuki Swift"
            }]

    },
    {
        "id":3,
        "title":"Honda",
        "checked":false,
        "items":
            [{
                "id":1,
                "name":"Accord",
                "checked":false,
                "value":"Honda Accord"
            },
            {
                "id":2,
                "name":"Amaze",
                "checked":false,
                "value":"Honda Amaze"
            },
            {
                "id":3,
                "name":"Brio",
                "checked":false,
                "value":"Honda Brio"
            },
            {
                "id":4,
                "name":"City",
                "checked":false,
                "value":"Honda City"
            }]

    },
    {
        "id":4,
        "title":"Toyota",
        "checked":false,
        "items":
            [{
                "id":1,
                "name":"Etios",
                "checked":false,
                "value":"Toyota Etios"
            },
            {
                "id":2,
                "name":"Innova",
                "checked":false,
                "value":"Toyota Innova"
            }]

    }
    ,
    {
        "id":4,
        "title":"Tata",
        "checked":false,
        "items":
            [{
                "id":1,
                "name":"Nexon",
                "checked":false,
                "value":"Tata Nexon"
            }]

    }];

    
    return data;
};

class ListContainer extends React.Component {
    state = {
        checkedItems: {},
        source: createFakeDataSource()
    };
    handleCheckItem = (type,makeName,item,e) => {
        let source = this.state.source
        if(type === 'model'){
           source.map((make,index)=>{
               if(make.title === makeName){
                let modelIndex =  make.items.findIndex((modelData)=>modelData.name === item.name)
                source[index].items[modelIndex].checked = !source[index].items[modelIndex].checked
               }
           })
        }else{
            source.map((make,index)=>{
                if(make.title === makeName){
                make.checked = !make.checked
              
                    make.items.map((makeItem,index)=>{
                        makeItem.checked = make.checked? true:false
                    })
                
                }
            })
            console.log(type,makeName,item,e)       
        }
       
        this.setState({source:source});
        this.props.getCarNameFilter(source)
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