export default function() {
        var suspend = false;
        $('select').material_select();
        $('select').on('change', function() {
            if (!suspend) {
                suspend = true;
                var event = new CustomEvent('change', {
                    detail: 'change',
                    bubbles: true
                });
                $(this).get(0).dispatchEvent(event);
            } else {
                suspend = false;
            }
        });
    }