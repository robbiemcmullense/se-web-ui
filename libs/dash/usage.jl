using Dash
using WebUiDash

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

IGNORED_ASSETS = join(readdir("assets/se-components"), "|")


app = dash(index_string = SE_DASH_APP_INDEX_STRING)

app.layout = se_app() do
    se_header(appTitle = "HyperPod Airflow Balancing Tool"),
    se_tabbar(
        children = [
            html_nav(
                children = [html_a(children = ["Home"], href = "/home"), html_a(children = ["Another"], href = "/another")]
            )
        ]
    ),
    html_h1(children="Hello Dash"),
    se_formfield(label="My Input", children=[dcc_input(id="input")]),
    html_div(id="output")
end

callback!(app, Output("output", "children"), Input("input", "value")) do input_value
    "Output: $(input_value)"
end

run_server(app, "127.0.0.1", debug = true)