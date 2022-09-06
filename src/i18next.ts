import i18next from 'i18next'
import ru from './locales/ru.json'

const resources = {
    ru: {
        translation: ru
    }
}

i18next.init({
    resources,
    lng: 'ru',
    interpolation: {
        escapeValue: false
    }
})

export default i18next
