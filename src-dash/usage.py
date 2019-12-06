import web_ui_dash as se
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = se.App(children=[

	se.Header(appTitle="HyperPod Airflow Balancing Tool"),
  se.Tabbar(),
	se.Container(children=[
		se.Block(width="250px", children=[
			se.BlockHeader(children=[html.H5(children="List classic with expander")]),
			se.BlockContent(option="fill", children=[
				se.List(children=[
					se.ListItem(item="my item 1", icon="user_standard", iconColor="primary", description="I have a description"),
					se.ListItem(item="my item 2 no description with a long text", icon="user_standard", iconColor="primary"),
					se.ListItem(item="Basic Item"),
					se.ListGroup(item="I have a selected child", icon="action_settings2", iconColor="primary", description="I'm selected when collapsed", children=[
						se.ListItem(item="my item 1", icon="action_settings2", iconColor="primary", description="I have a description"),
						se.ListItem(item="my item 2 no description", selected=True, icon="action_settings2", iconColor="primary"),
						se.ListItem(item="my item 3 no icon", description="I'm here too")
					]),
					se.ListGroup(item="simple collapse", children=[
						se.ListItem(item="No icon, not selected")
					])
				])
			]),
      se.BlockFooter(children=[
        se.Button(children=['My button'])
      ])
		]),
    se.Divider(option="vertical")
	]),







                #<ListGroup item="simple collapse" onDidGroupClick={this.openModal}>
                  #<ListItem item="No icon, not selected"> </ListItem>
                #</ListGroup>


	html.Div(id="output")
])

@app.callback(Output("output", "children"))#, [Input("input", "value")])
def display_output(value):
	return "You have entered {}".format(value)


if __name__ == "__main__":
	app.run_server(debug=True)
