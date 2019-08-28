import web_ui_dash
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = web_ui_dash.App(children=[

	web_ui_dash.Header(appTitle="HyperPod Airflow Balancing Tool"),
	web_ui_dash.Container(children=[
		web_ui_dash.Block(width="250px", children=[
			web_ui_dash.BlockHeader(children=[html.H5(children="List classic with expander")]),
			web_ui_dash.BlockContent(option="fill", children=[
				web_ui_dash.List(children=[
					web_ui_dash.ListItem(item="my item 1", icon="user_standard", iconColor="primary", description="I have a description"),
					web_ui_dash.ListItem(item="my item 2 no description with a long text", icon="user_standard", iconColor="primary"),
					web_ui_dash.ListItem(item="Basic Item"),
					web_ui_dash.ListGroup(item="I have a selected child", icon="action_settings2", iconColor="primary", description="I'm selected when collapsed", children=[
						web_ui_dash.ListItem(item="my item 1", icon="action_settings2", iconColor="primary", description="I have a description"),
						web_ui_dash.ListItem(item="my item 2 no description", selected=True, icon="action_settings2", iconColor="primary"),
						web_ui_dash.ListItem(item="my item 3 no icon", description="I'm here too")
					]),
					web_ui_dash.ListGroup(item="simple collapse", children=[
						web_ui_dash.ListItem(item="No icon, not selected")
					])
				])
			])
		])
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
