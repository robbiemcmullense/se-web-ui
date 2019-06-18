# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Header(Component):
    """A Header component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- appTitle (string; optional): The title that will be printed when this component is rendered."""
    @_explicitize_args
    def __init__(self, children=None, appTitle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'appTitle']
        self._type = 'Header'
        self._namespace = 'web_ui_dash'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'appTitle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Header, self).__init__(children=children, **args)
