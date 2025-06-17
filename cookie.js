const EU_COUNTRIES = [
    "AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", 
    "DK", "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "KZ", 
    "XK", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", 
    "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", 
    "UA", "GB", "VA"
];

const config = {
    allowedDomains: [],
    privacyPolicyUrl: 'https://freegrapesociety.com/privacy-policy',
    
    uetConfig: {
        enabled: false,
        defaultTagId: '137027166',
        autoDetectTagId: true,
        defaultConsent: 'denied',
        enforceInEEA: true
    },
    
    behavior: {
        autoShow: true,
        bannerDelay: 0,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: false,
        showFloatingButton: true,
        showAdminButton: false,
        floatingButtonPosition: 'left',
        adminButtonPosition: 'left',
        bannerPosition: 'left',
        bannerAnimation: {
            duration: 0.4,
            easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            enterEffect: 'fadeInUp',
            exitEffect: 'fadeOutDown'
        },
        modalAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        dashboardAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        bannerSchedule: {
            enabled: false,
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            startTime: '00:00',
            endTime: '23:59',
            daysOfWeek: [1,2,3,4,5],
            durationDays: 365,
            durationMinutes: 2
        }
    },
    
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: [],
        showLanguageSelector: false,
        autoDetectLanguage: true
    },
    
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: [],
        euOnly: false,
        specificRegions: []
    },
    
    analytics: {
        enabled: true,
        storageDays: 365,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: 365,
        trackPageViews: true,
        trackEvents: true,
        trackConsentChanges: true
    },
    
    uiTheme: 'default',
    
    bannerStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        width: '465px',
        padding: '24px',
        textColor: '#2c3e50',
        linkColor: '#3498db',
        linkHoverColor: '#1d6fa5',
        border: {
            enabled: false,
            width: '1px',
            style: 'solid',
            color: '#e0e0e0'
        },
        title: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#7f8c8d'
        }
    },
    
    buttonStyle: {
        borderRadius: '8px',
        padding: '12px 20px',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        
        accept: {
            background: '#f4fe81 !important',
            color: '#000000 !important',
            border: '1px solid #10100f12 !important',
            hover: {
                background: '#f4fe81 !important',
                color: '#000000 !important',
                transform: 'translateY(-1px) !important'
            }
        },
        
        reject: {
            background: '#ffffff',
            color: '#e74c3c',
            border: '1px solid #e74c3c',
            hover: {
                background: '#ffeeed',
                color: '#e74c3c',
                transform: 'translateY(-1px)'
            }
        },
        
        adjust: {
            background: '#f8f9fa',
            color: '#333333',
            border: '1px solid #e0e0e0',
            hover: {
                background: '#f0f2f5',
                color: '#333333',
                transform: 'translateY(-1px)'
            }
        },
        
        save: {
            background: '#3498db',
            color: '#ffffff',
            border: '1px solid #3498db',
            hover: {
                background: '#2980b9',
                color: '#ffffff',
                transform: 'translateY(-1px)'
            }
        }
    },
    
    floatingButtonStyle: {
        size: '50px',
        background: '#f4fe81',
        iconColor: '#000000',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#27ae60',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    adminButtonStyle: {
        size: '60px',
        background: '#2ecc71',
        iconColor: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#2980b9',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    modalStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '845px',
        maxHeight: '470px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe',
            textColor: '#2c3e50'
        },
        footer: {
            background: '#f8f9fa',
            borderTop: '1px solid #ecf0f1'
        },
        closeButton: {
            color: '#7f8c8d',
            hoverColor: '#e74c3c'
        }
    },
    
    toggleStyle: {
        activeColor: '#2ecc71',
        inactiveColor: '#bdc3c7',
        size: '50px',
        height: '26px',
        sliderSize: '20px'
    },
    
    categoryStyle: {
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ecf0f1',
        title: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            color: '#7f8c8d'
        }
    },
    
    dashboardStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '900px',
        maxHeight: '600px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe'
        },
        statCards: {
            background: '#f8f9fa',
            borderRadius: '8px',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db',
            totalColor: '#9b59b6'
        },
        barChart: {
            height: '20px',
            borderRadius: '10px',
            background: '#ecf0f1',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db'
        }
    }
};

// ============== IMPLEMENTATION SECTION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
// Initialize UET queue if not already exists (Microsoft Consent Mode)
if (typeof window.uetq === 'undefined') window.uetq = [];  // <-- ADD THIS LINE
function gtag() { dataLayer.push(arguments); }

// Initialize UET queue if not already exists
window.uetq = window.uetq || [];

// Set default consent (deny all except security)
// ============== IMPLEMENTATION SECTION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security) AND initial GCS signal
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Push initial GCS signal (G100) immediately after default consent
window.dataLayer.push({
    'event': 'initial_consent_state',
    'consent_mode': {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
    },
    'gcs': 'G100', // Explicit initial GCS signal
    'timestamp': new Date().toISOString()
});

// Set default UET consent
function setDefaultUetConsent() {
    if (!config.uetConfig.enabled) return;
    // Redundant safeguard
    if (typeof window.uetq === 'undefined') window.uetq = [];
    const consentState = config.uetConfig.defaultConsent === 'granted' ? 'granted' : 'denied';
    
    window.uetq.push('consent', 'default', {
        'ad_storage': consentState
    });
    
    // Push to dataLayer with GCS alignment
    window.dataLayer.push({
        'event': 'uet_consent_default',
        'consent_mode': {
            'ad_storage': consentState,
            'analytics_storage': 'denied', // Mirroring GCS initial state
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        },
        'gcs': 'G100', // Aligned with initial GCS signal
        'timestamp': new Date().toISOString()
    });
}


const cookieDatabase = {
    // ========== Advertising Cookies ==========
    // Google Ads
    '_gcl': { category: 'advertising', duration: '90 days', description: 'Google Click Identifier - Tracks ad clicks and conversions' },
    '_gcl_au': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion tracking' },
    '_gcl_aw': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion linker' },
    '_gcl_dc': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion linker (double click)' },
    'gclid': { category: 'advertising', duration: '30 days', description: 'Google Click ID - Tracks PPC ad clicks' },
    'IDE': { category: 'advertising', duration: '390 days', description: 'Google DoubleClick - Used for retargeting' },
    'NID': { category: 'advertising', duration: '180 days', description: 'Google Ads preferences' },
    '_gat_gtag': { category: 'advertising', duration: '1 minute', description: 'Google Tag Manager throttle' },
    '_gac_XXXX': { category: 'advertising', duration: '90 days', description: 'Google Ads campaign tracking' },
    
    // Microsoft Advertising
    'msclkid': { category: 'advertising', duration: '30 days', description: 'Microsoft Click ID - Tracks ad clicks' },
    '_uetmsdns': { category: 'advertising', duration: 'Session', description: 'Microsoft UET consent mode cookie' },
    'MUID': { category: 'advertising', duration: '390 days', description: 'Microsoft Universal ID' },
    'MUIDB': { category: 'advertising', duration: '390 days', description: 'Microsoft Bing Ads backup ID' },
    '_uetsid': { category: 'advertising', duration: '1 day', description: 'Bing Ads session ID' },
    '_uetvid': { category: 'advertising', duration: '390 days', description: 'Bing Ads visitor ID' },
    'ANON': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising anonymous ID' },
    'SRCHUID': { category: 'advertising', duration: '1 year', description: 'Microsoft Bing search user ID' },
    
    // Facebook/Meta
    '_fbp': { category: 'advertising', duration: '90 days', description: 'Facebook Pixel - Conversion tracking' },
    'fr': { category: 'advertising', duration: '90 days', description: 'Facebook browser ID' },
    'datr': { category: 'advertising', duration: '730 days', description: 'Facebook browser identification' },
    'lu': { category: 'advertising', duration: '2 years', description: 'Used to record whether the person chose to remain logged in' },
    'xs': { category: 'advertising', duration: '90 days', description: 'Used with c_user cookie to authenticate identity to Facebook' },
    'c_user': { category: 'advertising', duration: '90 days', description: 'Used with xs cookie to authenticate identity to Facebook' },
    '_fbc': { category: 'advertising', duration: '2 years', description: 'Used for Facebook advertising products like real time bidding' },
    
    // TikTok
    '_ttp': { category: 'advertising', duration: '390 days', description: 'TikTok Pixel tracking' },
    'ttclid': { category: 'advertising', duration: '30 days', description: 'TikTok Click ID' },
    'tt_sessionid': { category: 'advertising', duration: '1 day', description: 'TikTok session' },
    
    // LinkedIn
    'lidc': { category: 'advertising', duration: '1 day', description: 'LinkedIn Ads routing' },
    'bcookie': { category: 'advertising', duration: '730 days', description: 'LinkedIn Browser ID' },
    'li_sugr': { category: 'advertising', duration: '90 days', description: 'LinkedIn user tracking' },
    'BizoID': { category: 'advertising', duration: '180 days', description: 'LinkedIn advertising ID' },
    'lang': { category: 'advertising', duration: 'Session', description: 'LinkedIn language setting' },
    
    // Pinterest
    '_pinterest_ct_ua': { category: 'advertising', duration: '365 days', description: 'Pinterest Click Tracking' },
    '_pinterest_sess': { category: 'advertising', duration: '1 day', description: 'Pinterest session' },
    '_pin_unauth': { category: 'advertising', duration: '1 year', description: 'Pinterest unauthenticated user ID' },
    '_pinterest_referrer': { category: 'advertising', duration: '5 days', description: 'Pinterest referral information' },
    
    // Twitter (X)
    'personalization_id': { category: 'advertising', duration: '730 days', description: 'Twitter personalization' },
    'guest_id': { category: 'advertising', duration: '730 days', description: 'Twitter guest tracking' },
    'guest_id_ads': { category: 'advertising', duration: '730 days', description: 'Twitter advertising ID' },
    'remember_checked_on': { category: 'advertising', duration: '730 days', description: 'Twitter remember me setting' },
    
    // Snapchat
    'sc_at': { category: 'advertising', duration: '365 days', description: 'Snapchat Ads tracking' },
    '_scid': { category: 'advertising', duration: '365 days', description: 'Snapchat user ID' },
    '_sctr': { category: 'advertising', duration: '1 year', description: 'Snapchat click tracking' },
    
    // Reddit
    'rdt_uuid': { category: 'advertising', duration: '365 days', description: 'Reddit unique user ID' },
    'session_tracker': { category: 'advertising', duration: '1 day', description: 'Reddit session' },
    'reddaid': { category: 'advertising', duration: '1 year', description: 'Reddit advertising ID' },
    
    // Other advertising platforms
    'obuid': { category: 'advertising', duration: '365 days', description: 'Outbrain user ID' },
    'obcl': { category: 'advertising', duration: '30 days', description: 'Outbrain click tracking' },
    'criteo': { category: 'advertising', duration: '365 days', description: 'Criteo retargeting' },
    'uid': { category: 'advertising', duration: '365 days', description: 'Criteo user ID' },
    '__adroll': { category: 'advertising', duration: '365 days', description: 'AdRoll tracking' },
    '__ar_v4': { category: 'advertising', duration: '365 days', description: 'AdRoll segmentation' },
    'ad-id': { category: 'advertising', duration: '270 days', description: 'Amazon Ad System ID' },
    'ad-privacy': { category: 'advertising', duration: '730 days', description: 'Amazon Ad Preferences' },
    'yandexuid': { category: 'advertising', duration: '365 days', description: 'Yandex Metrica user ID' },
    'ymex': { category: 'advertising', duration: '365 days', description: 'Yandex Metrica visitor' },
    'm-b': { category: 'advertising', duration: '365 days', description: 'Quora browser ID' },
    'm-uid': { category: 'advertising', duration: '365 days', description: 'Quora user ID' },
    'sadb': { category: 'advertising', duration: '30 days', description: 'StackAdapt bidding data' },
    'sadr': { category: 'advertising', duration: '30 days', description: 'StackAdapt retargeting' },
    'TDID': { category: 'advertising', duration: '365 days', description: 'The Trade Desk ID' },
    'TDCPM': { category: 'advertising', duration: '365 days', description: 'The Trade Desk CPM data' },
    'mmapi': { category: 'advertising', duration: '30 days', description: 'MediaMath API tracking' },
    'mmdata': { category: 'advertising', duration: '30 days', description: 'MediaMath campaign data' },
    't_gid': { category: 'advertising', duration: '1 year', description: 'Taboola global user ID' },
    't_session': { category: 'advertising', duration: 'Session', description: 'Taboola session ID' },
    't_vpub': { category: 'advertising', duration: '1 day', description: 'Taboola video publisher ID' },
    'rcuid': { category: 'advertising', duration: '1 year', description: 'Revcontent user ID' },
    'rcreds': { category: 'advertising', duration: 'Session', description: 'Revcontent session data' },
    'lotame_dmp_id': { category: 'advertising', duration: '180 days', description: 'Lotame DMP ID' },
    'lotame_sync': { category: 'advertising', duration: '30 days', description: 'Lotame sync status' },
    'uuid': { category: 'advertising', duration: '1 year', description: 'Neustar UUID' },
    'uuid2': { category: 'advertising', duration: '1 year', description: 'Neustar backup UUID' },
    
    // Marketing/Advertising (merged)
    '_shopify_sa_p': { category: 'advertising', duration: '30 minutes', description: 'Shopify - Store analytics' },
    '_shopify_sa_t': { category: 'advertising', duration: '30 minutes', description: 'Shopify - Store analytics' },
    'mailchimp_landing_site': { category: 'advertising', duration: '28 days', description: 'Mailchimp campaign tracking' },
    'mc_user_id': { category: 'advertising', duration: '1 year', description: 'Mailchimp user ID' },
    '__kla_id': { category: 'advertising', duration: '2 years', description: 'Klaviyo user tracking' },
    'klaviyo': { category: 'advertising', duration: '1 year', description: 'Klaviyo session' },
    'visitor_idXXXX': { category: 'advertising', duration: '10 years', description: 'Pardot visitor ID' },
    'lpvXXXX': { category: 'advertising', duration: '30 minutes', description: 'Pardot page view tracking' },
    '_mkto_trk': { category: 'advertising', duration: '2 years', description: 'Marketo tracking' },
    '_abv': { category: 'advertising', duration: '1 year', description: 'ActiveCampaign browser verification' },
    '_fb': { category: 'advertising', duration: '3 months', description: 'Facebook Connect tracking' },
    '_gali': { category: 'advertising', duration: '30 seconds', description: 'Google Analytics link click tracking' },
    '_glc_au': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion linker' },
    '_rdt_uuid': { category: 'advertising', duration: '1 year', description: 'Reddit tracking' },
    '_scid_r': { category: 'advertising', duration: '1 year', description: 'Snapchat cross-domain tracking' },
    '_uetvid_exp': { category: 'advertising', duration: '1 day', description: 'Microsoft UET video engagement' },
    
    // ========== Analytics Cookies ==========
    // Google Analytics
    '_ga': { category: 'analytics', duration: '730 days', description: 'Google Analytics - Distinguishes users' },
    '_ga_XXXX': { category: 'analytics', duration: '730 days', description: 'Google Analytics 4 - Property-specific tracking' },
    '_gid': { category: 'analytics', duration: '1 day', description: 'Google Analytics - Distinguishes users' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gac_XXXX': { category: 'analytics', duration: '90 days', description: 'Google Analytics - Campaign tracking' },
    '_dc_gtm_XXXX': { category: 'analytics', duration: '1 minute', description: 'Google Tag Manager - Container-specific tracking' },
    
    // Microsoft Clarity
    '_clck': { category: 'analytics', duration: '365 days', description: 'Microsoft Clarity - Persists the Clarity user ID' },
    '_clsk': { category: 'analytics', duration: '1 day', description: 'Microsoft Clarity - Connects multiple page views' },
    '_cltk': { category: 'analytics', duration: 'Session', description: 'Microsoft Clarity - Session tracking' },
    '_clck_xxxxx': { category: 'analytics', duration: '365 days', description: 'Microsoft Clarity - Click tracking' },
    'CLID': { category: 'analytics', duration: '1 year', description: 'Microsoft Clarity - Client ID for user tracking across domains' },
    
    // Hotjar
    '_hjAbsoluteSessionInProgress': { category: 'analytics', duration: '30 minutes', description: 'Hotjar - Tracks session' },
    '_hjFirstSeen': { category: 'analytics', duration: 'Session', description: 'Hotjar - Identifies new sessions' },
    '_hjSession_XXXX': { category: 'analytics', duration: '30 minutes', description: 'Hotjar - Session data' },
    '_hjSessionUser_XXXX': { category: 'analytics', duration: '365 days', description: 'Hotjar - User ID tracking' },
    
    // Adobe Analytics
    's_cc': { category: 'analytics', duration: 'Session', description: 'Adobe Analytics - Detects if cookies are enabled' },
    's_sq': { category: 'analytics', duration: 'Session', description: 'Adobe Analytics - ClickMap tracking' },
    's_vi': { category: 'analytics', duration: '2 years', description: 'Adobe Analytics - Visitor ID' },
    'AMCV_XXXX': { category: 'analytics', duration: '2 years', description: 'Adobe Marketing Cloud - Visitor ID' },
    
    // Matomo
    '_pk_ref': { category: 'analytics', duration: '6 months', description: 'Matomo - Referral information' },
    '_pk_id': { category: 'analytics', duration: '13 months', description: 'Matomo - User ID' },
    '_pk_ses': { category: 'analytics', duration: '30 minutes', description: 'Matomo - Session tracking' },
    
    // Other Analytics
    'amplitude_id_XXXX': { category: 'analytics', duration: '10 years', description: 'Amplitude user ID' },
    'mp_XXXX_mixpanel': { category: 'analytics', duration: '1 year', description: 'Mixpanel user ID' },
    '_hp2_id.XXXX': { category: 'analytics', duration: '2 years', description: 'Heap Analytics user ID' },
    '_fs_uid': { category: 'analytics', duration: '1 year', description: 'FullStory user ID' },
    'mf_user': { category: 'analytics', duration: '90 days', description: 'Mouseflow user tracking' },
    '__hstc': { category: 'analytics', duration: '13 months', description: 'HubSpot - Visitor tracking' },
    'hubspotutk': { category: 'analytics', duration: '13 months', description: 'HubSpot - User token' },
    'vuid': { category: 'analytics', duration: '2 years', description: 'Vimeo - User tracking' },
    '_gaexp': { category: 'analytics', duration: '90 days', description: 'Google Optimize - Experiment tracking' },
    'ajs_anonymous_id': { category: 'analytics', duration: '1 year', description: 'Segment - Anonymous user tracking' },
    'ajs_user_id': { category: 'analytics', duration: '1 year', description: 'Segment - User identification' },
    '_shopify_uniq': { category: 'analytics', duration: '1 year', description: 'Shopify - Unique visitor tracking' },
    '_schn': { category: 'analytics', duration: 'Session', description: 'Snowplow analytics' },
    '_sp_id': { category: 'analytics', duration: '2 years', description: 'Snowplow visitor ID' },
    '_sp_ses': { category: 'analytics', duration: '30 minutes', description: 'Snowplow session ID' },
    '_chartbeat2': { category: 'analytics', duration: '1 year', description: 'Chartbeat analytics' },
    '_cb_ls': { category: 'analytics', duration: '1 year', description: 'Chartbeat visitor tracking' },
    '_cb': { category: 'analytics', duration: '1 year', description: 'Chartbeat session' },
    '_chartbeat4': { category: 'analytics', duration: 'Session', description: 'Chartbeat page view' },
    '_gaq': { category: 'analytics', duration: '2 years', description: 'Google Analytics queue' },
    '_gat_UA-XXXX': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle by property' },
    '_gat_gtm_XXXX': { category: 'analytics', duration: '1 minute', description: 'Google Tag Manager throttle' },
    '_gcl_aw': { category: 'analytics', duration: '90 days', description: 'Google Ads conversion linker' },
    '_gcl_dc': { category: 'analytics', duration: '90 days', description: 'Google Ads conversion linker (DoubleClick)' },
    '_uetvid': { category: 'analytics', duration: '16 days', description: 'Microsoft UET visitor ID' },
    '_uetvid_exp': { category: 'analytics', duration: '16 days', description: 'Microsoft UET visitor ID expiration' },
    
    // ========== Functional Cookies ==========
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '365 days', description: 'Consent preferences' },
    'sid': { category: 'functional', duration: 'Session', description: 'Salesforce - Session ID' },
    '__zlcmid': { category: 'functional', duration: '1 year', description: 'Zendesk - Chat identification' },
    'intercom-id-XXXX': { category: 'functional', duration: '9 months', description: 'Intercom - User identification' },
    'VISITOR_INFO1_LIVE': { category: 'functional', duration: '180 days', description: 'YouTube - Bandwidth estimation' },
    'YSC': { category: 'functional', duration: 'Session', description: 'YouTube - Session tracking' },
    'PREF': { category: 'functional', duration: '8 months', description: 'YouTube - Preferences' },
    '__stripe_mid': { category: 'functional', duration: '1 year', description: 'Stripe - Fraud prevention' },
    'nsid': { category: 'functional', duration: 'Session', description: 'PayPal - Session ID' },
    'LPVID': { category: 'functional', duration: '390 days', description: 'Microsoft Live Portal Visitor ID' },
    '__lc.visitor_id': { category: 'functional', duration: '3 years', description: 'LiveChat visitor ID' },
    'wordpress_test_cookie': { category: 'functional', duration: 'Session', description: 'WordPress test cookie' },
    'wp-settings-{user_id}': { category: 'functional', duration: '1 year', description: 'WordPress user settings' },
    '_shopify_y': { category: 'functional', duration: '1 year', description: 'Shopify - Anonymous checkout token' },
    '_shopify_s': { category: 'functional', duration: '30 minutes', description: 'Shopify - Session tracking' },
    'm': { category: 'functional', duration: '2 years', description: 'Stripe marketing tracking' },
    'bt_ai': { category: 'functional', duration: '1 year', description: 'Braintree analytics' },
    'cf_clearance': { category: 'functional', duration: '1 year', description: 'Cloudflare security clearance' },
    '__cf_bm': { category: 'functional', duration: '30 minutes', description: 'Cloudflare bot management' },
    '__cfruid': { category: 'functional', duration: 'Session', description: 'Cloudflare prioritized routing' },
    '__cq_dnt': { category: 'functional', duration: '1 year', description: 'Cloudflare Do Not Track' },
    '__cflb': { category: 'functional', duration: '30 minutes', description: 'Cloudflare load balancing' },
    '__cfwaitingroom': { category: 'functional', duration: 'Session', description: 'Cloudflare waiting room' },
    'AWSALB': { category: 'functional', duration: '7 days', description: 'AWS load balancer' },
    'AWSALBCORS': { category: 'functional', duration: '7 days', description: 'AWS load balancer CORS' },
    'JSESSIONID': { category: 'functional', duration: 'Session', description: 'Java session ID' },
    'laravel_session': { category: 'functional', duration: '2 hours', description: 'Laravel framework session' },
    'XSRF-TOKEN': { category: 'functional', duration: 'Session', description: 'CSRF protection token' },
    'remember_token': { category: 'functional', duration: '5 years', description: 'Persistent login token' },
    'logged_in': { category: 'functional', duration: 'Session', description: 'Login status indicator' },
    'sessionid': { category: 'functional', duration: '2 weeks', description: 'Django session ID' },
    'csrftoken': { category: 'functional', duration: '1 year', description: 'Django CSRF token' },
    'auth_token': { category: 'functional', duration: 'Session', description: 'Authentication token' },
    'jwt_token': { category: 'functional', duration: '1 hour', description: 'JWT authentication token' },
    'refresh_token': { category: 'functional', duration: '7 days', description: 'OAuth refresh token' },
    'access_token': { category: 'functional', duration: '1 hour', description: 'OAuth access token' },
    'token': { category: 'functional', duration: 'Session', description: 'Generic authentication token' },
    'user_id': { category: 'functional', duration: 'Session', description: 'User identification' },
    'user_hash': { category: 'functional', duration: 'Session', description: 'User authentication hash' },
    'locale': { category: 'functional', duration: '1 year', description: 'Language preference' },
    'currency': { category: 'functional', duration: '1 year', description: 'Currency preference' },
    'timezone': { category: 'functional', duration: '1 year', description: 'Timezone setting' },
    'theme': { category: 'functional', duration: '1 year', description: 'UI theme preference' },
    'cart_id': { category: 'functional', duration: '30 days', description: 'Shopping cart identifier' },
    'wishlist': { category: 'functional', duration: '1 year', description: 'Wishlist items' },
    'compare': { category: 'functional', duration: '30 days', description: 'Product comparison list' },
    'recently_viewed': { category: 'functional', duration: '30 days', description: 'Recently viewed products' },
    'last_search': { category: 'functional', duration: '30 days', description: 'Last search query' },
    'filter_preferences': { category: 'functional', duration: '30 days', description: 'Filter settings' },
    'sort_preference': { category: 'functional', duration: '30 days', description: 'Sorting preference' },
    'display_mode': { category: 'functional', duration: '30 days', description: 'Display mode (grid/list)' },
    'items_per_page': { category: 'functional', duration: '30 days', description: 'Pagination preference' },
    
    // ========== Security Cookies ==========
    '__Secure-3PAPISID': { category: 'security', duration: '2 years', description: 'Google secure authentication' },
    '__Secure-3PSID': { category: 'security', duration: '2 years', description: 'Google secure session ID' },
    '__Host-GAPS': { category: 'security', duration: '2 years', description: 'Google Apps secure cookie' },
    '__Secure-ID': { category: 'security', duration: '1 year', description: 'Secure identification cookie' },
    '__Secure-Token': { category: 'security', duration: 'Session', description: 'Secure authentication token' },
    '__Secure-Auth': { category: 'security', duration: 'Session', description: 'Secure authentication data' },
    '__Secure-Session': { category: 'security', duration: 'Session', description: 'Secure session data' },
    'CSRF-TOKEN': { category: 'security', duration: 'Session', description: 'Cross-site request forgery token' },
    'XSRF-TOKEN': { category: 'security', duration: 'Session', description: 'Cross-site request forgery token' },
    '__RequestVerificationToken': { category: 'security', duration: 'Session', description: 'ASP.NET request verification' },
    '__AntiForgeryToken': { category: 'security', duration: 'Session', description: 'ASP.NET anti-forgery token' },
    'auth_token': { category: 'security', duration: 'Session', description: 'Authentication token' },
    'secure_token': { category: 'security', duration: 'Session', description: 'Secure session token' },
    'two_factor': { category: 'security', duration: 'Session', description: 'Two-factor authentication status' },
    'captcha': { category: 'security', duration: 'Session', description: 'CAPTCHA verification' },
    'security_check': { category: 'security', duration: 'Session', description: 'Security validation' },
    'otp_verified': { category: 'security', duration: 'Session', description: 'One-time password verification' },
    'saml_session': { category: 'security', duration: 'Session', description: 'SAML authentication session' },
    'oauth_state': { category: 'security', duration: 'Session', description: 'OAuth state parameter' },
    'pkce_code_verifier': { category: 'security', duration: 'Session', description: 'PKCE code verifier' },
    'nonce': { category: 'security', duration: 'Session', description: 'Cryptographic nonce' },
    'fingerprint': { category: 'security', duration: 'Session', description: 'Browser fingerprint' },
    'device_id': { category: 'security', duration: '1 year', description: 'Device identification' },
    'ip_check': { category: 'security', duration: 'Session', description: 'IP address validation' },
    'security_level': { category: 'security', duration: 'Session', description: 'Security clearance level' },
    'auth_method': { category: 'security', duration: 'Session', description: 'Authentication method used' },
    'session_valid': { category: 'security', duration: 'Session', description: 'Session validation flag' },
    'secure_session': { category: 'security', duration: 'Session', description: 'Encrypted session data' },
    'token_valid': { category: 'security', duration: 'Session', description: 'Token validation status' },
    'signed_in': { category: 'security', duration: 'Session', description: 'Login status indicator' },
    'trusted_device': { category: 'security', duration: '1 year', description: 'Trusted device marker' },
    
    // ========== Performance Cookies ==========
    '__fast_cid': { category: 'performance', duration: '1 year', description: 'Fastly client ID' },
    '__fast_sid': { category: 'performance', duration: 'Session', description: 'Fastly session ID' },
    '__utma': { category: 'performance', duration: '2 years', description: 'Google Analytics unique visitor' },
    '__utmb': { category: 'performance', duration: '30 minutes', description: 'Google Analytics session tracking' },
    '__utmc': { category: 'performance', duration: 'Session', description: 'Google Analytics session tracking' },
    '__utmt': { category: 'performance', duration: '10 minutes', description: 'Google Analytics throttle' },
    '__utmz': { category: 'performance', duration: '6 months', description: 'Google Analytics campaign tracking' },
    '__utmv': { category: 'performance', duration: '2 years', description: 'Google Analytics visitor segmentation' },
    '_gat_UA-XXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_gtag_UA_XXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_gtag_XXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-X': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-XXXXXX-XXXXXXXXXX': { category: 'performance', duration: '1 minute', description: 'Google Analytics throttle' },
    
    // ========== A/B Testing Cookies ==========
    'optimizelyEndUserId': { category: 'testing', duration: '6 months', description: 'Optimizely user ID' },
    'optimizelySegments': { category: 'testing', duration: '6 months', description: 'Optimizely segmentation' },
    '_vwo_uuid_v2': { category: 'testing', duration: '1 year', description: 'VWO user tracking' },
    '_vwo_ds': { category: 'testing', duration: '1 month', description: 'VWO session tracking' },
    '_vwo_sn': { category: 'testing', duration: '30 minutes', description: 'VWO session number' },
    '_vwo_uuid': { category: 'testing', duration: '1 year', description: 'VWO unique user ID' },
    '_vwo': { category: 'testing', duration: '1 year', description: 'VWO experiment data' },
    '_vis_opt_test_cookie': { category: 'testing', duration: 'Session', description: 'Visual Website Optimizer test' },
    '_vis_opt_s': { category: 'testing', duration: 'Session', description: 'Visual Website Optimizer session' },
    '_vis_opt_exp_{X}_combi': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer experiment combination' },
    '_vis_opt_exp_{X}_exclude': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer experiment exclusion' },
    '_vis_opt_exp_{X}_goal_{Y}': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer goal tracking' },
    '_vis_opt_exp_{X}_split': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer split test' },
    '_vis_opt_exp_{X}_treatment': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer treatment' },
    '_vis_opt_out': { category: 'testing', duration: '10 years', description: 'Visual Website Optimizer opt-out' },
    '_vis_opt_splash': { category: 'testing', duration: 'Session', description: 'Visual Website Optimizer splash' },
    '_vis_opt_exp_{X}_combi_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer combination history' },
    '_vis_opt_exp_{X}_goal_{Y}_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer goal history' },
    '_vis_opt_exp_{X}_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer experiment history' },
    '_vis_opt_exp_{X}_split_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer split history' },
    '_vis_opt_exp_{X}_treatment_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer treatment history' },
    '_vis_opt_exp_{X}_trigger': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer trigger' },
    '_vis_opt_exp_{X}_trigger_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer trigger history' },
    '_vis_opt_exp_{X}_vis': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer visitor' },
    '_vis_opt_exp_{X}_vis_hist': { category: 'testing', duration: '100 days', description: 'Visual Website Optimizer visitor history' },
    
    // ========== Social Media Cookies ==========
    'ig_did': { category: 'social', duration: '1 year', description: 'Instagram device ID' },
    'ig_nrcb': { category: 'social', duration: 'Session', description: 'Instagram request count' },
    'reddit_session': { category: 'social', duration: '1 year', description: 'Reddit authentication' },
    'loid': { category: 'social', duration: '2 years', description: 'Reddit anonymous ID' },
    'twid': { category: 'social', duration: '1 year', description: 'Twitter user ID' },
    'ct0': { category: 'social', duration: '6 hours', description: 'Twitter CSRF token' },
    'auth_token': { category: 'social', duration: 'Session', description: 'Twitter authentication' },
    'guest_id': { category: 'social', duration: '730 days', description: 'Twitter guest tracking' },
    'personalization_id': { category: 'social', duration: '730 days', description: 'Twitter personalization' },
    'remember_checked': { category: 'social', duration: '730 days', description: 'Twitter remember me setting' },
    'external_referer': { category: 'social', duration: '7 days', description: 'Twitter external referrer' },
    'fm': { category: 'social', duration: 'Session', description: 'Facebook messenger' },
    'c_user': { category: 'social', duration: '90 days', description: 'Facebook user ID' },
    'xs': { category: 'social', duration: '90 days', description: 'Facebook session' },
        // ========== Social Media Cookies (continued) ==========
    'datr': { category: 'social', duration: '2 years', description: 'Facebook browser identification' },
    'sb': { category: 'social', duration: '2 years', description: 'Facebook browser ID' },
    'wd': { category: 'social', duration: '1 week', description: 'Facebook screen resolution' },
    'dpr': { category: 'social', duration: '1 week', description: 'Facebook device pixel ratio' },
    'locale': { category: 'social', duration: '1 week', description: 'Facebook language setting' },
    'presence': { category: 'social', duration: 'Session', description: 'Facebook chat presence' },
    'act': { category: 'social', duration: 'Session', description: 'Facebook current account activity' },
    'pl': { category: 'social', duration: 'Session', description: 'Facebook page liking' },
    'xs': { category: 'social', duration: '90 days', description: 'Facebook session authentication' },
    'csm': { category: 'social', duration: '90 days', description: 'Facebook content security' },
    'spin': { category: 'social', duration: '90 days', description: 'Facebook spam prevention' },
    'lu': { category: 'social', duration: '2 years', description: 'Facebook logged-in status' },
    'p': { category: 'social', duration: 'Session', description: 'Facebook page view' },
    's': { category: 'social', duration: 'Session', description: 'Facebook session tracking' },
    'usida': { category: 'social', duration: 'Session', description: 'Facebook user identification' },
    'x-referer': { category: 'social', duration: 'Session', description: 'Facebook referrer tracking' },
    'm_pixel_ratio': { category: 'social', duration: 'Session', description: 'Facebook mobile pixel ratio' },
    'li_at': { category: 'social', duration: '1 year', description: 'LinkedIn authentication' },
    'JSESSIONID': { category: 'social', duration: 'Session', description: 'LinkedIn session ID' },
    'bscookie': { category: 'social', duration: '2 years', description: 'LinkedIn browser security' },
    'visit': { category: 'social', duration: '2 years', description: 'LinkedIn visit tracking' },
    'sl': { category: 'social', duration: 'Session', description: 'LinkedIn language setting' },
    'bcookie': { category: 'social', duration: '2 years', description: 'LinkedIn browser ID' },
    'lidc': { category: 'social', duration: '1 day', description: 'LinkedIn routing' },
    'lissc': { category: 'social', duration: '1 year', description: 'LinkedIn secure session' },
    'sdsc': { category: 'social', duration: 'Session', description: 'LinkedIn dynamic content' },
    'UserMatchHistory': { category: 'social', duration: '30 days', description: 'LinkedIn ad matching' },
    'AnalyticsSyncHistory': { category: 'social', duration: '30 days', description: 'LinkedIn analytics sync' },
    'lang': { category: 'social', duration: 'Session', description: 'LinkedIn language setting' },
    'sc_at': { category: 'social', duration: '1 year', description: 'Snapchat authentication' },
    'xs': { category: 'social', duration: '1 year', description: 'Snapchat session' },
    'mid': { category: 'social', duration: '2 years', description: 'Instagram user ID' },
    'csrftoken': { category: 'social', duration: '1 year', description: 'Instagram CSRF token' },
    'rur': { category: 'social', duration: 'Session', description: 'Instagram referrer' },
    'urlgen': { category: 'social', duration: 'Session', description: 'Instagram URL generation' },
    'ds_user_id': { category: 'social', duration: '1 year', description: 'Instagram user ID' },
    'sessionid': { category: 'social', duration: '1 year', description: 'Instagram session' },
    'shbid': { category: 'social', duration: '1 week', description: 'Instagram browser ID' },
    'shbts': { category: 'social', duration: '1 week', description: 'Instagram browser timestamp' },
    'mcd': { category: 'social', duration: '3 months', description: 'Instagram market country' },
    'fbm_124024574287414': { category: 'social', duration: '2 years', description: 'Facebook page-specific ID' },
    'fbsr_124024574287414': { category: 'social', duration: '2 years', description: 'Facebook page-specific signed request' },
    'Pinterest': { category: 'social', duration: '1 year', description: 'Pinterest authentication' },
    '_pinterest_sess': { category: 'social', duration: '1 year', description: 'Pinterest session' },
    '_auth': { category: 'social', duration: '1 year', description: 'Pinterest authentication' },
    '_b': { category: 'social', duration: '2 years', description: 'Pinterest browser ID' },
    '_pinterest_cm': { category: 'social', duration: '1 year', description: 'Pinterest conversion tracking' },
    '_pinterest_ct_rt': { category: 'social', duration: '1 year', description: 'Pinterest click tracking' },
    '_pinterest_ct_ua': { category: 'social', duration: '1 year', description: 'Pinterest user action tracking' },
    '_pinterest_referrer': { category: 'social', duration: '5 days', description: 'Pinterest referrer' },
    '_pinterest_sess': { category: 'social', duration: '1 year', description: 'Pinterest session' },
    '_routing_id': { category: 'social', duration: '1 year', description: 'Pinterest routing' },
    '_pinterest_pfob': { category: 'social', duration: 'Session', description: 'Pinterest first-party opt-out' },
    '_pinterest_pfob_exp': { category: 'social', duration: 'Session', description: 'Pinterest opt-out expiration' },
    '_pinterest_pfob_ts': { category: 'social', duration: 'Session', description: 'Pinterest opt-out timestamp' },
    '_pinterest_pfob_v': { category: 'social', duration: 'Session', description: 'Pinterest opt-out version' },
    '_pinterest_pfob_c': { category: 'social', duration: 'Session', description: 'Pinterest opt-out count' },
    '_pinterest_pfob_s': { category: 'social', duration: 'Session', description: 'Pinterest opt-out status' },
    '_pinterest_pfob_r': { category: 'social', duration: 'Session', description: 'Pinterest opt-out reason' },
    '_pinterest_pfob_t': { category: 'social', duration: 'Session', description: 'Pinterest opt-out type' },
    '_pinterest_pfob_i': { category: 'social', duration: 'Session', description: 'Pinterest opt-out ID' },
    '_pinterest_pfob_p': { category: 'social', duration: 'Session', description: 'Pinterest opt-out path' },
    '_pinterest_pfob_d': { category: 'social', duration: 'Session', description: 'Pinterest opt-out domain' },
    '_pinterest_pfob_m': { category: 'social', duration: 'Session', description: 'Pinterest opt-out method' },
    '_pinterest_pfob_f': { category: 'social', duration: 'Session', description: 'Pinterest opt-out flag' },
    '_pinterest_pfob_n': { category: 'social', duration: 'Session', description: 'Pinterest opt-out name' },
    '_pinterest_pfob_o': { category: 'social', duration: 'Session', description: 'Pinterest opt-out origin' },
    '_pinterest_pfob_a': { category: 'social', duration: 'Session', description: 'Pinterest opt-out action' },
    '_pinterest_pfob_b': { category: 'social', duration: 'Session', description: 'Pinterest opt-out browser' },
    '_pinterest_pfob_e': { category: 'social', duration: 'Session', description: 'Pinterest opt-out environment' },
    '_pinterest_pfob_g': { category: 'social', duration: 'Session', description: 'Pinterest opt-out group' },
    '_pinterest_pfob_h': { category: 'social', duration: 'Session', description: 'Pinterest opt-out hash' },
    '_pinterest_pfob_j': { category: 'social', duration: 'Session', description: 'Pinterest opt-out JSON' },
    '_pinterest_pfob_k': { category: 'social', duration: 'Session', description: 'Pinterest opt-out key' },
    '_pinterest_pfob_l': { category: 'social', duration: 'Session', description: 'Pinterest opt-out location' },
    '_pinterest_pfob_q': { category: 'social', duration: 'Session', description: 'Pinterest opt-out query' },
    '_pinterest_pfob_u': { category: 'social', duration: 'Session', description: 'Pinterest opt-out URL' },
    '_pinterest_pfob_w': { category: 'social', duration: 'Session', description: 'Pinterest opt-out window' },
    '_pinterest_pfob_x': { category: 'social', duration: 'Session', description: 'Pinterest opt-out XML' },
    '_pinterest_pfob_y': { category: 'social', duration: 'Session', description: 'Pinterest opt-out YAML' },
    '_pinterest_pfob_z': { category: 'social', duration: 'Session', description: 'Pinterest opt-out zone' },

    // ========== Essential Cookies ==========
    '__cfduid': { category: 'essential', duration: '1 month', description: 'Cloudflare security cookie' },
    'AWSELB': { category: 'essential', duration: 'Session', description: 'AWS load balancer session stickiness' },
    'AWSELBCORS': { category: 'essential', duration: 'Session', description: 'AWS load balancer CORS session stickiness' },
    'ARRAffinity': { category: 'essential', duration: 'Session', description: 'Azure load balancer affinity' },
    'ARRAffinitySameSite': { category: 'essential', duration: 'Session', description: 'Azure SameSite affinity' },
    'SERVERID': { category: 'essential', duration: 'Session', description: 'Server load balancing' },
    'TS01XXXXXX': { category: 'essential', duration: 'Session', description: 'F5 load balancer session' },
    'BIGipServerXXXX': { category: 'essential', duration: 'Session', description: 'F5 BIG-IP load balancer' },
    'JSESSIONID': { category: 'essential', duration: 'Session', description: 'Java application server session' },
    'PHPSESSID': { category: 'essential', duration: 'Session', description: 'PHP session identifier' },
    'ASP.NET_SessionId': { category: 'essential', duration: 'Session', description: 'ASP.NET session identifier' },
    'laravel_session': { category: 'essential', duration: '2 hours', description: 'Laravel framework session' },
    'symfony': { category: 'essential', duration: 'Session', description: 'Symfony framework session' },
    'django_language': { category: 'essential', duration: '1 year', description: 'Django language preference' },
    'wp_woocommerce_session_XXXX': { category: 'essential', duration: '2 days', description: 'WooCommerce session' },
    'wordpress_logged_in_XXXX': { category: 'essential', duration: 'Session', description: 'WordPress login status' },
    'wordpress_sec_XXXX': { category: 'essential', duration: 'Session', description: 'WordPress security cookie' },
    'wordpress_test_cookie': { category: 'essential', duration: 'Session', description: 'WordPress test cookie' },
    'wp-settings-{user_id}': { category: 'essential', duration: '1 year', description: 'WordPress user settings' },
    'wp-settings-time-{user_id}': { category: 'essential', duration: '1 year', description: 'WordPress settings timestamp' },
    'comment_author_XXXX': { category: 'essential', duration: '1 year', description: 'WordPress comment author' },
    'comment_author_email_XXXX': { category: 'essential', duration: '1 year', description: 'WordPress comment author email' },
    'comment_author_url_XXXX': { category: 'essential', duration: '1 year', description: 'WordPress comment author URL' },
    'hasConsent': { category: 'essential', duration: '1 year', description: 'Consent management' },
    'cookieConsent': { category: 'essential', duration: '1 year', description: 'Cookie consent status' },
    'OptanonConsent': { category: 'essential', duration: '1 year', description: 'OneTrust consent preferences' },
    'OptanonAlertBoxClosed': { category: 'essential', duration: '1 year', description: 'OneTrust banner closed status' },
    'eu_cookie_consent': { category: 'essential', duration: '1 year', description: 'EU cookie consent' },
    'cookie_notice_accepted': { category: 'essential', duration: '1 year', description: 'Cookie notice acceptance' },
    'cookielawinfo-checkbox-necessary': { category: 'essential', duration: '1 year', description: 'Cookie law necessary cookies' },
    'cookielawinfo-checkbox-functional': { category: 'essential', duration: '1 year', description: 'Cookie law functional cookies' },
    'cookielawinfo-checkbox-performance': { category: 'essential', duration: '1 year', description: 'Cookie law performance cookies' },
    'cookielawinfo-checkbox-analytics': { category: 'essential', duration: '1 year', description: 'Cookie law analytics cookies' },
    'cookielawinfo-checkbox-advertisement': { category: 'essential', duration: '1 year', description: 'Cookie law advertising cookies' },
    'cookielawinfo-checkbox-others': { category: 'essential', duration: '1 year', description: 'Cookie law other cookies' },
    '__RequestVerificationToken': { category: 'essential', duration: 'Session', description: 'ASP.NET request verification' },
    '__Host-nonce': { category: 'essential', duration: 'Session', description: 'Content Security Policy nonce' },
    '__Secure-nonce': { category: 'essential', duration: 'Session', description: 'Secure Content Security Policy nonce' },
    'XSRF-TOKEN': { category: 'essential', duration: 'Session', description: 'Cross-site request forgery token' },
    'CSRF-TOKEN': { category: 'essential', duration: 'Session', description: 'Cross-site request forgery token' },
    'X-CSRF-TOKEN': { category: 'essential', duration: 'Session', description: 'Cross-site request forgery token' },
    '_csrf': { category: 'essential', duration: 'Session', description: 'CSRF protection token' },
    'csrf_token': { category: 'essential', duration: 'Session', description: 'CSRF protection token' },
    'anti-forgery-token': { category: 'essential', duration: 'Session', description: 'Anti-forgery token' },
    '__cf_bm': { category: 'essential', duration: '30 minutes', description: 'Cloudflare bot management' },
    '__cfruid': { category: 'essential', duration: 'Session', description: 'Cloudflare prioritized routing' },
    '__cf_waitingroom': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room' },
    '__cfwaitingroom': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room' },
    '__cflb': { category: 'essential', duration: '30 minutes', description: 'Cloudflare load balancing' },
    '__cfwaitingroom_c': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room count' },
    '__cfwaitingroom_d': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room duration' },
    '__cfwaitingroom_e': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room expiration' },
    '__cfwaitingroom_i': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room ID' },
    '__cfwaitingroom_k': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room key' },
    '__cfwaitingroom_l': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room limit' },
    '__cfwaitingroom_m': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room message' },
    '__cfwaitingroom_n': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room name' },
    '__cfwaitingroom_o': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room order' },
    '__cfwaitingroom_p': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room position' },
    '__cfwaitingroom_q': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room queue' },
    '__cfwaitingroom_r': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room redirect' },
    '__cfwaitingroom_s': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room status' },
    '__cfwaitingroom_t': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room timestamp' },
    '__cfwaitingroom_u': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room URL' },
    '__cfwaitingroom_v': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room version' },
    '__cfwaitingroom_w': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room wait' },
    '__cfwaitingroom_x': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room exit' },
    '__cfwaitingroom_y': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room yield' },
    '__cfwaitingroom_z': { category: 'essential', duration: 'Session', description: 'Cloudflare waiting room zone' },
};

// Language translations
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Adjust",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast1Day: "Last 1 Day",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        seeAnalytics: "See Consent Analytics"
    },
    
     // ... (keep all other language translations the same)
};

// Country to language mapping
const countryLanguageMap = {
    // EU Countries
    'AT': 'de',     // Austria
    'BE': 'nl',     // Belgium (Dutch)
    'BE': 'fr',     // Belgium (French)
    'BG': 'bg',     // Bulgaria
    'HR': 'hr',     // Croatia
    'CY': 'el',     // Cyprus
    'CZ': 'cs',     // Czech Republic
    'DK': 'da',     // Denmark
    'EE': 'et',     // Estonia
    'FI': 'fi',     // Finland
    'FR': 'fr',     // France
    'DE': 'de',     // Germany
    'GR': 'el',     // Greece
    'HU': 'hu',     // Hungary
    'IE': 'en',     // Ireland
    'IT': 'it',     // Italy
    'LV': 'lv',     // Latvia
    'LT': 'lt',     // Lithuania
    'LU': 'fr',     // Luxembourg
    'LU': 'de',     // Luxembourg
    'MT': 'mt',     // Malta
    'NL': 'nl',     // Netherlands
    'PL': 'pl',     // Poland
    'PT': 'pt',     // Portugal
    'RO': 'ro',     // Romania
    'SK': 'sk',     // Slovakia
    'SI': 'sl',     // Slovenia
    'ES': 'es',     // Spain
    'SE': 'sv',     // Sweden
    
    // Other European countries
    'AL': 'en',     // Albania
    'BA': 'en',     // Bosnia and Herzegovina
    'IS': 'en',     // Iceland
    'LI': 'de',     // Liechtenstein
    'MK': 'en',     // North Macedonia
    'NO': 'en',     // Norway
    'RS': 'en',     // Serbia
    'CH': 'de',     // Switzerland
    'CH': 'fr',     // Switzerland
    'CH': 'it',     // Switzerland
    'UA': 'uk',     // Ukraine
    'GB': 'en',     // United Kingdom
    
    // Rest of the world
    'US': 'en',     // United States
    'CA': 'en',     // Canada
    'CA': 'fr',     // Canada (French)
    'AU': 'en',     // Australia
    'NZ': 'en',     // New Zealand
    'ZA': 'en',     // South Africa
    'IN': 'en',     // India
    'CN': 'zh',     // China
    'JP': 'ja',     // Japan
    'KR': 'ko',     // South Korea
    'BR': 'pt',     // Brazil
    'MX': 'es',     // Mexico
    'AR': 'es',     // Argentina
    'RU': 'ru'      // Russia
};

// Analytics data storage
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {}
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Banner scheduling variables
let bannerTimer = null;
let bannerShown = false;

// Location data storage
// Location data storage with immediate initialization
// Location data storage - start empty
let locationData = {};

// First try to load from session storage if available
const savedLocation = sessionStorage.getItem('locationData');
if (savedLocation) {
    locationData = JSON.parse(savedLocation);
} else {
    // If no saved data, fetch fresh data
    fetchLocationData().then(() => {
        // Push to dataLayer after we have the data
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'locationInitialized',
            'location_data': locationData,
            'timestamp': new Date().toISOString()
        });
    });
}
// Function to fetch location data
async function fetchLocationData() {
    // Skip if we already have valid location data (optional safety check)
    if (locationData.country && locationData.country !== 'Unknown') {
        return locationData;
    }

    try {
        const response = await fetch('https://ipinfo.io/json?token=4c1e5d00e0ac93');
        if (!response.ok) throw new Error('Failed to fetch location');
        
        const payload = await response.json();
        
        // Update locationData with actual values
        locationData = {
            continent: getContinentFromCountry(payload.country) || "Unknown",
            country: payload.country || "Unknown",
            city: payload.city || "Unknown",
            zip: payload.postal || "Unknown",
            ip: payload.ip || "Unknown",
            street: payload.loc || "Unknown",
            region: payload.region || "Unknown",
            timezone: payload.timezone || "Unknown",
            isp: payload.org || "Unknown",
            language: (navigator.language || "Unknown").split("-")[0]
        };

        // Save to session storage
        sessionStorage.setItem('locationData', JSON.stringify(locationData));
        
        // Push to dataLayer - THIS IS WHERE IT HAPPENS NOW
        window.dataLayer.push({
            'event': 'locationRetrieved',
            'location_data': locationData,
            'timestamp': new Date().toISOString()
        });
        
        return locationData;
        
    } catch (error) {
        console.error('Error fetching location:', error);
        // Set defaults if API fails
        locationData = {
            continent: "Unknown",
            country: "Unknown",
            city: "Unknown",
            zip: "Unknown",
            ip: "Unknown",
            street: "Unknown",
            region: "Unknown",
            timezone: "Unknown",
            isp: "Unknown",
            language: (navigator.language || "Unknown").split("-")[0]
        };
        return locationData;
    }
}

// Function to map countries to their respective continents
function getContinentFromCountry(countryCode) {
    const continentMap = {
        "AF": "Africa", "AL": "Europe", "DZ": "Africa", "AS": "Oceania", "AD": "Europe", "AO": "Africa",
        "AR": "South America", "AM": "Asia", "AU": "Oceania", "AT": "Europe", "AZ": "Asia", "BS": "North America",
        "BH": "Asia", "BD": "Asia", "BB": "North America", "BY": "Europe", "BE": "Europe", "BZ": "North America",
        "BJ": "Africa", "BT": "Asia", "BO": "South America", "BA": "Europe", "BW": "Africa", "BR": "South America",
        "BN": "Asia", "BG": "Europe", "BF": "Africa", "BI": "Africa", "BJ": "Africa", "BD": "Asia",
        "NL": "Europe", "US": "North America", "CA": "North America", "GB": "Europe", "CN": "Asia", "IN": "Asia",
        "ZA": "Africa", "AU": "Oceania", "NZ": "Oceania", "DE": "Europe", "FR": "Europe", "IT": "Europe",
        "ES": "Europe", "PL": "Europe", "SE": "Europe", "NO": "Europe", "DK": "Europe", "RU": "Europe",
        "BR": "South America", "MX": "North America", "JP": "Asia", "KR": "Asia", "AE": "Asia", "SG": "Asia",
        "TH": "Asia", "ID": "Asia", "PH": "Asia", "MY": "Asia", "KH": "Asia", "VN": "Asia", "PK": "Asia",
        "EG": "Africa", "KE": "Africa", "NG": "Africa", "ET": "Africa", "TZ": "Africa", "UG": "Africa",
        "GH": "Africa", "MA": "Africa", "MO": "Asia", "LK": "Asia", "BD": "Asia", "IQ": "Asia",
        "CO": "South America", "CL": "South America", "PE": "South America", "VE": "South America",
        "BO": "South America", "PY": "South America", "SR": "South America", "EC": "South America",
        "GT": "North America", "HT": "North America", "DO": "North America", "CR": "North America",
        "CU": "North America", "JM": "North America", "BS": "North America", "NI": "North America",
        "BZ": "North America", "PA": "North America", "SV": "North America", "GT": "North America",
        "RU": "Europe", "BG": "Europe", "RO": "Europe", "UA": "Europe", "CZ": "Europe", "HU": "Europe",
        "SK": "Europe", "HR": "Europe", "SI": "Europe", "MK": "Europe", "RS": "Europe", "ME": "Europe",
        "AL": "Europe", "AM": "Asia", "AZ": "Asia", "GE": "Asia", "MN": "Asia", "NP": "Asia", "BT": "Asia",
        "KG": "Asia", "TJ": "Asia", "UZ": "Asia", "KZ": "Asia", "TM": "Asia"
    };

    return continentMap[countryCode] || "Unknown";
}

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data
function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    saveAnalyticsData();
}

// Generate analytics dashboard HTML
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    const today = new Date().toISOString().split('T')[0];
    const last1Day = {};
    last1Day[today] = consentAnalytics.daily[today] || { accepted: 0, rejected: 0, custom: 0 };
    
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast1Day}</h4>
                <div class="stat-bars">
                    ${Object.entries(last1Day).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    if (!geoData || !geoData.country || geoData.country === 'Unknown') {
        return !config.geoConfig.euOnly;
    }

    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }

    if (config.geoConfig.euOnly) {
        return EU_COUNTRIES.includes(geoData.country);
    }

    if (config.geoConfig.specificRegions.length > 0) {
        return config.geoConfig.specificRegions.includes(geoData.region);
    }

    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    return true;
}

// Detect user language
function detectUserLanguage(geoData) {
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.main-privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
        
        const seeAnalyticsLink = modal.querySelector('.see-analytics-link');
        if (seeAnalyticsLink) {
            seeAnalyticsLink.textContent = lang.seeAnalytics;
        }
    }
    
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    const dashboardModal = document.getElementById('cookieAnalyticsModal');
    if (dashboardModal && dashboardModal.style.display === 'flex') {
        if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generatePasswordPrompt(languageCode);
            setupPasswordPromptEvents();
        } else {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(languageCode);
        }
    }

    const dashboardTitle = document.querySelector('.cookie-analytics-header h2');
    if (dashboardTitle) {
        dashboardTitle.textContent = lang.dashboardTitle;
    }

    const passwordPrompt = document.querySelector('.password-prompt h3');
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    const passwordError = document.getElementById('passwordError');
    if (passwordPrompt) passwordPrompt.textContent = lang.passwordPrompt;
    if (passwordSubmit) passwordSubmit.textContent = lang.passwordSubmit;
    if (passwordError && passwordError.textContent) {
        passwordError.textContent = translations[languageCode].passwordIncorrect;
    }
    
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Scan and categorize existing cookies
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        if (!name) return;
        
        let categorized = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: nameValue.substring(name.length + 1) || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: nameValue.substring(name.length + 1) || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Get cookie duration
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : 
            "Expired";
    }
    return "Session";
}

// Generate cookie table
function generateCookieTable(cookies) {
    return `
    <table class="main-cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td class="cookie-value-cell">
                    <span class="cookie-value-full" style="display:none;">${cookie.value}</span>
                    <span class="cookie-value-truncated">${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</span>
                    ${cookie.value.length > 20 ? '<button class="toggle-cookie-value" data-state="truncated">Show full</button>' : ''}
                </td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

// Inject all HTML elements into the page
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="main-toggle-switch" data-ms-consent="ad_storage">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="main-cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none">
            <title>Admin Dashboard</title>
            <path d="M4.75,20.75A.25.25,0,0,0,5,20.5v-2a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v2a.25.25,0,0,0,.25.25Z"/>
            <path d="M10.75,20.75A.25.25,0,0,0,11,20.5v-7a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v7a.25.25,0,0,0,.25.25Z"/>
            <path d="M16.75,20.75A.25.25,0,0,0,17,20.5v-5a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5a.25.25,0,0,0,.25.25Z"/>
            <path d="M22.75,20.75A.25.25,0,0,0,23,20.5V8.5a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v12a.25.25,0,0,0,.25.25Z"/>
            <path d="M3.5,13.5a2,2,0,0,0,2-2,1.981,1.981,0,0,0-.1-.6l3.167-2.64A1.955,1.955,0,0,0,11.011,7.8l2.5.834A2,2,0,0,0,17.5,8.5a1.964,1.964,0,0,0-.231-.912l3.287-3.835A1.994,1.994,0,1,0,19.5,2a1.962,1.962,0,0,0,.093.571L16.13,6.612a1.932,1.932,0,0,0-2.141.593l-2.5-.833A1.995,1.995,0,0,0,7.6,7.1L4.436,9.744A1.975,1.975,0,0,0,3.5,9.5a2,2,0,0,0,0,4Z"/>
            <path d="M23,22H1a1.016,1.016,0,0,0-1,1,1,1,0,0,0,1,1H23a1,1,0,0,0,1-1A1.015,1.015,0,0,0,23,22Z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="main-cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="${config.privacyPolicyUrl}" class="main-privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="all-cookie-consent-buttons">
    <button id="adjustConsentBtn" class="cookie-btn top-adjust-button">${lang.customize}</button>
    <button id="rejectAllBtn" class="cookie-btn top-reject-btn">${lang.reject}</button>
    <button id="acceptAllBtn" class="cookie-btn main-accept-button">${lang.accept}</button>
</div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                ${config.analytics.enabled ? `
                <div class="see-analytics-container">
                    <a href="#" class="see-analytics-link">${lang.seeAnalytics}</a>
                </div>` : ''}
                 <div class="modal-buttons-container">
                 
               
                <button id="saveSettingsBtn" class="cookie-btn main-save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn main-accept-button">${lang.accept}</button>
                  <button id="rejectAllSettingsBtn" class="cookie-btn top-adjust-button ccc">${lang.reject}</button>
                
                   
                    
                </div>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
            <path d="M6 8H8.01V10H6V8Z" fill="currentColor"/>
            <path d="M11 11H13.01V13H11V11Z" fill="currentColor"/>
            <path d="M8 15H10.01V17H8V15Z" fill="currentColor"/>
            <path d="M15 15H17.01V17H15V15Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C12.0366 1 12.0732 1.00018 12.1097 1.00054L13.3208 1.01239L13.08 2.19932C13.0276 2.45721 13 2.72486 13 3C13 4.95769 14.4074 6.58878 16.2659 6.93296L16.9419 7.05815L17.067 7.73414C17.4112 9.59261 19.0423 11 21 11C21.2751 11 21.5428 10.9724 21.8007 10.92L22.9876 10.6792L22.9995 11.8903C22.9998 11.9268 23 11.9634 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.0002 3.0549C6.50018 3.55223 3 7.36736 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4478 17.4998 20.9451 12.9998C18.2609 12.9757 15.9991 11.1899 15.2573 8.74272C12.8101 8.00085 11.0243 5.73912 11.0002 3.0549Z" fill="currentColor"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// Check if banner should be shown based on schedule
function shouldShowBanner() {
    if (!config.behavior.bannerSchedule.enabled) {
        return true;
    }

    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const currentDay = now.getDay();

    if (config.behavior.bannerSchedule.durationDays) {
        const firstVisit = getCookie('first_visit_date');
        if (!firstVisit) {
            setCookie('first_visit_date', currentDate, config.behavior.bannerSchedule.durationDays);
            return true;
        }
        
        const firstVisitDate = new Date(firstVisit);
        const endDate = new Date(firstVisitDate);
        endDate.setDate(endDate.getDate() + config.behavior.bannerSchedule.durationDays);
        
        return now <= endDate;
    }

    if (config.behavior.bannerSchedule.durationMinutes) {
        const sessionStart = getCookie('session_start_time');
        if (!sessionStart) {
            setCookie('session_start_time', now.getTime().toString(), 0.5);
            return true;
        }
        
        const sessionStartTime = parseInt(sessionStart);
        const endTime = sessionStartTime + (config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
        
        return now.getTime() <= endTime;
    }

    const startDate = new Date(config.behavior.bannerSchedule.startDate);
    const endDate = new Date(config.behavior.bannerSchedule.endDate);
    
    if (now < startDate || now > endDate) {
        return false;
    }

    const startTime = parseInt(config.behavior.bannerSchedule.startTime.split(':')[0]) * 100 + 
                      parseInt(config.behavior.bannerSchedule.startTime.split(':')[1]);
    const endTime = parseInt(config.behavior.bannerSchedule.endTime.split(':')[0]) * 100 + 
                    parseInt(config.behavior.bannerSchedule.endTime.split(':')[1]);

    if (currentTime < startTime || currentTime > endTime) {
        return false;
    }

    if (config.behavior.bannerSchedule.daysOfWeek.length > 0 && 
        !config.behavior.bannerSchedule.daysOfWeek.includes(currentDay)) {
        return false;
    }

    return true;
}

// Main initialization function
// Updated initializeCookieConsent function
function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    const geoAllowed = checkGeoTargeting(locationData);
    
    // Always show banner if no consent given, regardless of autoShow setting
    if (!consentGiven && geoAllowed) {
        showCookieBanner();
    } 
    // If consent was given, update consent mode and load cookies
    else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    }
    
    changeLanguage(config.languageConfig.defaultLanguage);
    
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.value = config.languageConfig.defaultLanguage;
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    setupEventListeners();
    
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-cookie-value')) {
            const cell = e.target.closest('.cookie-value-cell');
            const full = cell.querySelector('.cookie-value-full');
            const truncated = cell.querySelector('.cookie-value-truncated');
            
            if (e.target.dataset.state === 'truncated') {
                full.style.display = 'inline';
                truncated.style.display = 'none';
                e.target.textContent = 'Hide full';
                e.target.dataset.state = 'full';
            } else {
                full.style.display = 'none';
                truncated.style.display = 'inline';
                e.target.textContent = 'Show full';
                e.target.dataset.state = 'truncated';
            }
        }
    });
    
    if (config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
    
    const seeAnalyticsLink = document.querySelector('.see-analytics-link');
    if (seeAnalyticsLink) {
        seeAnalyticsLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAnalyticsDashboard();
        });
    }
    
    if (config.behavior.bannerSchedule.enabled && config.behavior.bannerSchedule.durationMinutes) {
        if (bannerTimer) {
            clearTimeout(bannerTimer);
        }
        
        bannerTimer = setTimeout(() => {
            if (!getCookie('cookie_consent')) {
                hideCookieBanner();
            }
        }, config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
    }
}

// Setup password prompt events
function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            const lang = document.getElementById('cookieLanguageSelect') ? 
                document.getElementById('cookieLanguageSelect').value : 'en';
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

// Setup all event listeners
function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal').addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
}

// Show/hide functions with animations
function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
    bannerShown = true;
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
    bannerShown = false;
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showAnalyticsDashboard() {
    const lang = document.getElementById('cookieLanguageSelect') ? 
        document.getElementById('cookieLanguageSelect').value : 'en';
    
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        const modal = document.getElementById('cookieAnalyticsModal');
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
}

// Cookie consent functions
function acceptAllCookies() {
    const acceptBtn = document.getElementById('acceptAllBtn');
    if (acceptBtn) {
        // Add clicked class
        acceptBtn.classList.add('clicked');
        
        // Remove clicked class after animation completes
        setTimeout(() => {
            acceptBtn.classList.remove('clicked');
        }, 300);
    }
    
    // Rest of your existing acceptAllCookies function
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
    
    window.dataLayer.push({
        'event': 'cookie_consent_accepted',
        'consent_mode': {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'personalization_storage': 'granted',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
        },
        'gcs': 'G111',
        'consent_status': 'accepted',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: false,
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
    }
    
    window.dataLayer.push({
        'event': 'cookie_consent_rejected',
        'consent_mode': {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'denied',
            'security_storage': 'granted'
        },
        'gcs': 'G100',
        'consent_status': 'rejected',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

function saveCustomSettings() {
    const analyticsChecked = document.querySelector('input[data-category="analytics"]').checked;
    const advertisingChecked = document.querySelector('input[data-category="advertising"]').checked;
    
    let gcsSignal;
    if (analyticsChecked && advertisingChecked) {
        gcsSignal = 'G111';
    } else if (!analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G100';
    } else if (analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G101';
    } else if (!analyticsChecked && advertisingChecked) {
        gcsSignal = 'G110';
    }

    const consentData = {
        status: 'custom',
        gcs: gcsSignal,
        categories: {
            functional: true,
            analytics: analyticsChecked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: advertisingChecked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
    
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };
    
    if (analyticsChecked && !advertisingChecked) {
        window.dataLayer.push({
            'event': 'analytics_cookie_accepted',
            'consent_mode': {
                'analytics_storage': 'granted',
                'ad_storage': 'denied'
            },
            'gcs': 'G101',
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    } else if (advertisingChecked && !analyticsChecked) {
        window.dataLayer.push({
            'event': 'marketing_cookie_accepted',
            'consent_mode': {
                'ad_storage': 'granted',
                'analytics_storage': 'denied'
            },
            'gcs': 'G110',
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    } else {
        window.dataLayer.push({
            'event': 'cookie_consent_custom',
            'consent_mode': consentStates,
            'gcs': gcsSignal,
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    }
}

// Helper functions
function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
}

function loadCookiesAccordingToConsent(consentData) {
   if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

// Update consent mode for both Google and Microsoft UET
function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    let gcsSignal = 'G100';
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        if (consentData.categories.analytics && !consentData.categories.advertising) {
            gcsSignal = 'G101';
        } else if (consentData.categories.advertising && !consentData.categories.analytics) {
            gcsSignal = 'G110';
        } else if (consentData.categories.analytics && consentData.categories.advertising) {
            gcsSignal = 'G111';
        } else {
            gcsSignal = 'G100';
        }
    }

    gtag('consent', 'update', {
        ...consentStates,
      
    });
    
    if (config.uetConfig.enabled) {
        const uetConsentState = consentData.categories.advertising ? 'granted' : 'denied';
        window.uetq.push('consent', 'update', {
            'ad_storage': uetConsentState
        });
        
        window.dataLayer.push({
            'event': 'uet_consent_update',
            'uet_consent': {
                'ad_storage': uetConsentState,
                'status': consentData.status,
                'src': 'update',
                'asc': uetConsentState === 'granted' ? 'G' : 'D',
                'timestamp': new Date().toISOString()
            },
            'location_data': locationData
        });
    }
    
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

// Cookie management functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Load analytics cookies function
function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
}

// Load performance cookies function
function loadPerformanceCookies() {
    console.log('Loading performance cookies');
}

// Main execution flow
document.addEventListener('DOMContentLoaded', async function() {
    if (!sessionStorage.getItem('locationData')) {
        await fetchLocationData();
    }  
   
   // Modified initialization code
function initializeCookieConsentScript() {
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner not shown - domain not allowed');
        return;
    }

    if (config.analytics.enabled) {
        loadAnalyticsData();
    }

    setDefaultUetConsent();

    fetchLocationData().then(() => {
        const geoAllowed = checkGeoTargeting(locationData);
        if (!geoAllowed) {
            console.log('Cookie consent banner not shown - geo-targeting restriction');
            return;
        }

        const detectedCookies = scanAndCategorizeCookies();
        const userLanguage = detectUserLanguage(locationData);

        injectConsentHTML(detectedCookies, userLanguage);
        initializeCookieConsent(detectedCookies, userLanguage);

        if (config.behavior.acceptOnScroll) {
            let scrollTimeout;
            window.addEventListener('scroll', function() {
                if (!getCookie('cookie_consent') && bannerShown) {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(function() {
                        const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
                        if (scrollPercentage > 30) {
                            acceptAllCookies();
                            hideCookieBanner();
                            if (config.behavior.showFloatingButton) {
                                showFloatingButton();
                            }
                        }
                    }, 200);
                }
            });
        }

        if (config.behavior.acceptOnContinue) {
            document.addEventListener('click', function(e) {
                if (!getCookie('cookie_consent') && bannerShown && 
                    !e.target.closest('#cookieConsentBanner') && 
                    !e.target.closest('#cookieSettingsModal')) {
                    acceptAllCookies();
                    hideCookieBanner();
                    if (config.behavior.showFloatingButton) {
                        showFloatingButton();
                    }
                }
            });
        }
    });
}

// Run immediately for Tag Manager preview
initializeCookieConsentScript();

// Also keep the DOMContentLoaded listener for normal page loads
document.addEventListener('DOMContentLoaded', initializeCookieConsentScript);

// Export functions for global access if needed
if (typeof window !== 'undefined') {
    window.cookieConsent = {
        showBanner: showCookieBanner,
        hideBanner: hideCookieBanner,
        showSettings: showCookieSettings,
        acceptAll: acceptAllCookies,
        rejectAll: rejectAllCookies,
        saveSettings: saveCustomSettings,
        changeLanguage: changeLanguage,
        showAnalytics: showAnalyticsDashboard,
        config: config
    };
}
