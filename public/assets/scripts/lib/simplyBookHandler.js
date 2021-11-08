
class SimplyBookHandler {

    //Define os parâmetros base e a URL de acesso do widget
    constructor(simplyBookUrl, customParameters) {
        this._defaultParameters = `{"widget_type": "iframe", "url": "${simplyBookUrl}", "theme": "bookingtroll", "theme_settings": { "timeline_hide_unavailable": "1", "hide_past_days": "0", "timeline_show_end_time": "0", "timeline_modern_display": "as_slots", "sb_base_color": "#009cff", "display_item_mode": "list", "sb_review_image": "", "dark_font_color": "#2d3a58", "light_font_color": "#ffffff", "btn_color_1": "#ff3f6c", "sb_company_label_color": "#ffffff", "hide_img_mode": "1", "sb_busy": "#dad2ce", "sb_available": "#d3e0f1" }, "timeline": "modern", "datepicker": "top_calendar", "is_rtl": false, "app_config": { "allow_switch_to_ada": 0, "predefined": {} }}`;
        this._customParameters = customParameters;
    }

    //Métodos para definir e alterar os parametros customizados
    get customParameters() {
        return this._customParameters;
    }

    set customParameters(parameters) {
        this._customParameters = parameters;
    }

    //Método de montagem do widget
    get simplyBookWidget() {

        let urlParametersObject = {};

        //Traduz os parâmetros da URL para o JSON do Simplybook
        for (const [index, value] of this._customParameters) {

            let indiceTratado;

            switch (index) {
                case 'cidade':
                    indiceTratado = 'location'
                    break;
                case 'produto':
                    indiceTratado = 'service'
                    break;
                case 'filial':
                    indiceTratado = 'provider'
                    break;
                case 'categoria': {
                    indiceTratado = 'category'
                    break;
                }
                default:
                    break;
            }

            //Só entra aqui se a variável enviada por URL for válida
            if (indiceTratado != '') {
                //Caso tenha vindo uma propriedade na URL que seja uma palavra/nome com espaço, virá com o % no lugar do espaço e essa linha irá substituir e colocar de volta o espaço
                urlParametersObject[indiceTratado] = (value.indexOf('%') > 0 ? value.replace(/%/g, " ") : value);
            }
        }

        //Transforma os parametros padrões em um objeto
        var widgetConfig = JSON.parse(this._defaultParameters);

        //Define os parametros customizados no objeto
        widgetConfig.app_config.predefined = urlParametersObject;

        //Cria o widget
        return new SimplybookWidget(widgetConfig);
    }
}