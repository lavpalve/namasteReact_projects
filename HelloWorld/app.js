/* <div>
   <div id="parent">
        <div id="child1">
            <h1>Hi am h1 tag</h1>
            <h2>Hi am h2 tag</h2>
        </div>
        <div id="child2">
            <h1>Hi am h1 tag</h1>
            <h2>Hi am h2 tag</h2>
        </div>
   </div>
</div> */

const rectHeading = React.createElement('div',
     { id: 'parent'},
     [React.createElement('div',
         {id:'child1', className: 'rctHeading'},
         [React.createElement('h1', {}, 'Hi am h1 tag'), React.createElement('h2', {}, 'Hi am h2 tag')]
        )
    , React.createElement('div',
        {id:'child2'},
        [React.createElement('h1', {}, 'Hi am h1 tag'), React.createElement('h2', {}, 'Hi am h2 tag')]
       )
    ]
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(rectHeading)