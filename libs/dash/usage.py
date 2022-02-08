import web_ui_dash as se
import dash
from dash.dependencies import Input, Output
from dash import html, dcc
import os

SE_DASH_APP_INDEX_STRING = """
<!DOCTYPE html>
<html>
    <head>
        {%metas%}
        <title>{%title%}</title>
        {%favicon%}
        <script type="module" src="assets/se-components/se-components.esm.js"></script>
        <link type="text/css" rel="stylesheet" href="assets/icons/css/styles.css" />
        <link type="text/css" rel="stylesheet" href="assets/fonts/css/styles-technical.css" />
        {%css%}
    </head>
    <body>
        {%app_entry%}
        <footer>
            {%config%}
            {%scripts%}
            {%renderer%}
        </footer>
    </body>
</html>
"""

IGNORED_ASSETS = "|".join(os.listdir("assets/se-components"))

app = dash.Dash(
    __name__, assets_ignore=IGNORED_ASSETS, index_string=SE_DASH_APP_INDEX_STRING
)


app.layout = se.App(
    [
        se.Header(appTitle="HyperPod Airflow Balancing Tool"),
        se.Tabbar(
            children=[
                html.Nav(
                    children=[
                        html.A(children=["Home"], href="/home"),
                        html.A(children=["Another"], href="/another"),
                    ]
                )
            ]
        ),
        html.H1(children="Hello Dash"),
        se.FormField(
            label="My Input",
            id="se-input",
            children=[dcc.Input(id="input", placeholder="Write something")],
        ),
        html.Div(id="output"),
    ]
)


@app.callback(Output("output", "children"), [Input("input", "value")])
def display_output(value):
    return "You have entered {}".format(value)


if __name__ == "__main__":
    app.run_server(debug=True)
