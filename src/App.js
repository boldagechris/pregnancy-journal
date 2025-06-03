import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Baby, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Settings, 
  Plus,
  ChevronRight,
  Bell,
  User,
  Activity,
  Weight,
  Droplets,
  AlertCircle,
  Check,
  Eye,
  EyeOff,
  Share2,
  Lock,
  UserPlus,
  MessageCircle,
  Download,
  Globe,
  Phone,
  Video,
  Mail,
  Info,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Simple translation function
const useTranslation = () => {
  const [language, setLanguage] = useState('da');

  const translations = {
    da: {
      // App and Navigation
      appTitle: 'Graviditetsjournal',
      home: 'Hjem',
      data: 'Data',
      sharing: 'Deling',
      calendar: 'Aftaler',
      settings: 'Indstillinger',
      week: 'uge',
      
      // Home View
      currentWeight: 'Nuværende vægt',
      fetalHeartRate: 'Fosterlyd',
      beatsPerMin: 'slag/min',
      nextAppointment: 'Næste aftale',
      midwifeConsultation: 'Jordemoder konsultation',
      recentMeasurements: 'Seneste målinger',
      addMeasurement: 'Tilføj ny måling',
      contactMidwife: 'Kontakt jordemoder',
      
      // Midwife Communication
      midwifeCommunication: 'Kommunikation med jordemoder',
      sendMessage: 'Send besked',
      callMidwife: 'Ring til jordemoder',
      videoCall: 'Videoopkald',
      sendEmail: 'Send e-mail',
      urgentContact: 'Akut kontakt',
      urgentContactDesc: 'For akutte spørgsmål - ring direkte',
      messageSubject: 'Emne',
      messageContent: 'Besked',
      messageSubjectPlaceholder: 'F.eks. Spørgsmål om vægtøgning',
      messageContentPlaceholder: 'Skriv din besked til jordemoderen...',
      sendMessageButton: 'Send besked',
      messageSent: 'Besked sendt!',
      messageSentDesc: 'Din jordemoder vil svare inden for 24 timer',
      availableHours: 'Åbningstider',
      mondayFriday: 'Man-Fre: 08:00-16:00',
      emergency: 'Akut: 24/7',
      yourMidwife: 'Din jordemoder',
      department: 'Roskilde Sygehus, Fødselafdeling',
      close: 'Luk',
      
      // Measurements
      weight: 'Vægt',
      bloodPressure: 'Blodtryk',
      fetalHeart: 'Fosterlyd',
      urineTest: 'Urinprøve',
      normal: 'Normal',
      
      // Partner Sharing
      partnerSharing: 'Deling med partner',
      sharingSubtitle: 'Del udvalgte graviditetsdata sikkert med din partner',
      noPartner: 'Ingen partner tilknyttet',
      noPartnerDesc: 'Spørg din jordemoder eller læge om at invitere din partner',
      simulateInvitation: 'Simuler partner invitation',
      partner: 'Partner',
      active: 'Aktiv',
      
      // Calendar/Appointments
      weekScan: '20 ugers scanning',
      upcoming: 'Kommende',
      addAppointment: 'Tilføj aftale',
      
      // GDPR
      gdprTitle: 'Databeskyttelse (GDPR)',
      gdprDescription: 'I henhold til GDPR skal vi have dit samtykke til at behandle dine personoplysninger.',
      acceptAndContinue: 'Acceptér og fortsæt',
      journal: 'Journal',
      journalForNextMeeting: 'Journal til næste møde',
      writeJournal: 'Skriv i journalen',
      journalPlaceholder: 'Skriv dine tanker, spørgsmål eller bekymringer til næste møde med jordemoderen...',
      saveJournal: 'Gem journal',
      journalSaved: 'Journal gemt!',
      journalSavedDesc: 'Din journal er nu klar til næste møde med jordemoderen',
      sendToMidwife: 'Send til jordemoder',
      journalSent: 'Journal sendt!',
      journalSentDesc: 'Din journal er nu sendt til jordemoderen',
      
      // Weight Chart Translations
      weightProgress: 'Vægtudvikling',
      weightInformation: 'Vægtinformation',
      normalWeightGain: 'Normal vægtøgning under graviditeten er typisk mellem 11,5-16 kg',
      weightGainPattern: 'Mest vægtøgning sker i andet og tredje trimester',
      currentTotalGain: 'Nuværende total vægtøgning',
      weightUnit: 'kg',
    },
    
    en: {
      // App and Navigation
      appTitle: 'Pregnancy Journal',
      home: 'Home',
      data: 'Data',
      sharing: 'Sharing',
      calendar: 'Appointments',
      settings: 'Settings',
      week: 'weeks',
      
      // Home View
      currentWeight: 'Current weight',
      fetalHeartRate: 'Fetal heart rate',
      beatsPerMin: 'beats/min',
      nextAppointment: 'Next appointment',
      midwifeConsultation: 'Midwife consultation',
      recentMeasurements: 'Recent measurements',
      addMeasurement: 'Add new measurement',
      contactMidwife: 'Contact midwife',
      
      // Midwife Communication
      midwifeCommunication: 'Midwife communication',
      sendMessage: 'Send message',
      callMidwife: 'Call midwife',
      videoCall: 'Video call',
      sendEmail: 'Send email',
      urgentContact: 'Urgent contact',
      urgentContactDesc: 'For urgent questions - call directly',
      messageSubject: 'Subject',
      messageContent: 'Message',
      messageSubjectPlaceholder: 'E.g. Question about weight gain',
      messageContentPlaceholder: 'Write your message to the midwife...',
      sendMessageButton: 'Send message',
      messageSent: 'Message sent!',
      messageSentDesc: 'Your midwife will respond within 24 hours',
      availableHours: 'Available hours',
      mondayFriday: 'Mon-Fri: 08:00-16:00',
      emergency: 'Emergency: 24/7',
      yourMidwife: 'Your midwife',
      department: 'Roskilde Hospital, Maternity Ward',
      close: 'Close',
      
      // Measurements
      weight: 'Weight',
      bloodPressure: 'Blood pressure',
      fetalHeart: 'Fetal heart rate',
      urineTest: 'Urine test',
      normal: 'Normal',
      
      // Partner Sharing
      partnerSharing: 'Partner sharing',
      sharingSubtitle: 'Share selected pregnancy data securely with your partner',
      noPartner: 'No partner connected',
      noPartnerDesc: 'Ask your midwife or doctor to invite your partner',
      simulateInvitation: 'Simulate partner invitation',
      partner: 'Partner',
      active: 'Active',
      
      // Calendar/Appointments
      weekScan: '20 week scan',
      upcoming: 'Upcoming',
      addAppointment: 'Add appointment',
      
      // GDPR
      gdprTitle: 'Data Protection (GDPR)',
      gdprDescription: 'In accordance with GDPR, we need your consent to process your personal information.',
      acceptAndContinue: 'Accept and continue',
      journal: 'Journal',
      journalForNextMeeting: 'Journal for next meeting',
      writeJournal: 'Write in journal',
      journalPlaceholder: 'Write your thoughts, questions, or concerns for the next midwife meeting...',
      saveJournal: 'Save journal',
      journalSaved: 'Journal saved!',
      journalSavedDesc: 'Your journal is now ready for the next midwife meeting',
      sendToMidwife: 'Send to midwife',
      journalSent: 'Journal sent!',
      journalSentDesc: 'Your journal has been sent to the midwife',
      
      // Weight Chart Translations
      weightProgress: 'Weight Progress',
      weightInformation: 'Weight Information',
      normalWeightGain: 'Normal weight gain during pregnancy is typically between 11.5-16 kg',
      weightGainPattern: 'Most weight gain occurs in the second and third trimesters',
      currentTotalGain: 'Current total weight gain',
      weightUnit: 'kg',
    }
  };

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    // Language switching logic
  }, []);

  return { t, language, changeLanguage };
};

// Language Switcher Component
const LanguageSwitcher = ({ language, onLanguageChange }) => (
  <div className="flex items-center space-x-2">
    <Globe className="w-4 h-4 text-white opacity-70" />
    <div className="flex bg-white bg-opacity-20 rounded-lg p-1">
      <button
        onClick={() => onLanguageChange('da')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          language === 'da' 
            ? 'bg-white text-amber-600 font-medium' 
            : 'text-white hover:bg-white hover:bg-opacity-20'
        }`}
      >
        🇩🇰 DA
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          language === 'en' 
            ? 'bg-white text-amber-600 font-medium' 
            : 'text-white hover:bg-white hover:bg-opacity-20'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  </div>
);

// Main App Component
const FixedPregnancyApp = () => {
  const { t, language, changeLanguage } = useTranslation();
  const [currentView, setCurrentView] = useState('home');
  const [showGdprModal, setShowGdprModal] = useState(true);
  const [showMidwifeModal, setShowMidwifeModal] = useState(false);
  const [partnerSharing, setPartnerSharing] = useState({
    isEnabled: false,
    partnerName: 'Lars Hansen'
  });
  const [messageForm, setMessageForm] = useState({
    subject: '',
    content: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const user = {
    name: 'Maria Hansen',
    gestationalWeek: '28+4'
  };

  const pregnancyData = {
    currentWeight: 68.5,
    nextAppointment: '2025-06-03',
    fetalHeartRate: 142,
    appointments: [
      { 
        id: 1,
        date: '2025-06-03', 
        time: '10:00', 
        type: 'midwifeConsultation',
        provider: 'Jordemoder Anne'
      },
      { 
        id: 2,
        date: '2025-06-15', 
        time: '14:30', 
        type: 'weekScan',
        provider: 'Ultralydsklinik'
      }
    ],
    recentEntries: [
      { 
        date: '2025-05-20', 
        type: 'Vægt', 
        value: '68.5 kg', 
        provider: 'Jordemoder Anne',
        infoUrl: 'https://www.sst.dk/da/udgivelser/2022/Anbefalinger-for-svangreomsorgen'
      },
      { 
        date: '2025-05-20', 
        type: 'Blodtryk', 
        value: '118/75', 
        provider: 'Jordemoder Anne',
        infoUrl: 'https://www.sundhed.dk/borger/patienthaandbogen/graviditet/illustrationer/foto/blodtryksmaaling-i-graviditeten/#:~:text=Under%20graviditeten%20m%C3%A5les%20blodtrykket%20i,blodtryk%20er%20h%C3%B8jst%20140%2F90.'
      },
      { 
        date: '2025-05-20', 
        type: 'Fosterlyd', 
        value: '142 slag/min', 
        provider: 'Jordemoder Anne',
        infoUrl: 'https://www.sundhed.dk/sundhedsfaglig/laegehaandbogen/undersoegelser-og-proever/undersoegelser/ultralyd/ultralyd-i-graviditeten/'
      },
      { 
        date: '2025-05-15', 
        type: 'Urinprøve', 
        value: 'Normal (-A, -S)', 
        provider: 'Jordemoder Anne',
        infoUrl: 'https://www.sundhed.dk/borger/patienthaandbogen/nyrer-og-urinveje/sygdomme/diverse/urinundersoegelse/'
      }
    ]
  };

  // GDPR Modal
  const GdprModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-amber-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">{t('gdprTitle')}</h2>
        </div>
        <p className="text-gray-600 mb-6 text-sm">{t('gdprDescription')}</p>
        <button
          onClick={() => setShowGdprModal(false)}
          className="w-full bg-amber-500 text-white py-3 px-4 rounded-xl font-medium"
        >
          {t('acceptAndContinue')}
        </button>
      </div>
    </div>
  );

  // Midwife Communication Modal
  const MidwifeCommunicationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {messageSent ? (
          // Success state
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('messageSent')}</h3>
            <p className="text-gray-600 mb-6">{t('messageSentDesc')}</p>
            <button
              onClick={() => {
                setShowMidwifeModal(false);
                setMessageSent(false);
                setMessageForm({ subject: '', content: '' });
              }}
              className="w-full bg-amber-500 text-white py-3 rounded-xl font-medium"
            >
              {t('close')}
            </button>
          </div>
        ) : (
          // Communication options
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{t('midwifeCommunication')}</h2>
              <button
                onClick={() => setShowMidwifeModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Midwife Info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t('yourMidwife')}</h3>
                  <p className="text-sm text-gray-600">Jordemoder Anne</p>
                  <p className="text-xs text-gray-500">{t('department')}</p>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                <p>{t('availableHours')}:</p>
                <p>{t('mondayFriday')}</p>
                <p className="font-medium">{t('emergency')}</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => window.open('tel:+4547474747')}
                className="flex flex-col items-center p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-green-600 mb-2" />
                <span className="text-sm font-medium text-green-700">{t('callMidwife')}</span>
              </button>
              <button
                onClick={() => alert('Video call feature coming soon!')}
                className="flex flex-col items-center p-4 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <Video className="w-6 h-6 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-purple-700">{t('videoCall')}</span>
              </button>
            </div>

            {/* Message Form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t('sendMessage')}</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('messageSubject')}
                </label>
                <input
                  type="text"
                  value={messageForm.subject}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder={t('messageSubjectPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('messageContent')}
                </label>
                <textarea
                  value={messageForm.content}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                  placeholder={t('messageContentPlaceholder')}
                />
              </div>
              <button
                onClick={() => {
                  if (messageForm.subject.trim() && messageForm.content.trim()) {
                    setMessageSent(true);
                  }
                }}
                disabled={!messageForm.subject.trim() || !messageForm.content.trim()}
                className="w-full bg-amber-500 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                <span>{t('sendMessageButton')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Header
  const Header = () => (
    <header className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-4 rounded-b-3xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Baby className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">{t('appTitle')}</h1>
            <p className="text-sm opacity-90">{user.name}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">{user.gestationalWeek}</div>
          <div className="text-xs opacity-90">{t('week')}</div>
        </div>
      </div>
      
      <div className="mt-3 flex justify-end">
        <LanguageSwitcher language={language} onLanguageChange={changeLanguage} />
      </div>
    </header>
  );

  // Navigation
  const Navigation = () => (
    <nav className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          { id: 'home', icon: Heart, label: t('home') },
          { id: 'data', icon: Activity, label: t('data') },
          { id: 'journal', icon: BookOpen, label: t('journal') },
          { id: 'calendar', icon: Calendar, label: t('calendar') },
          { id: 'settings', icon: Settings, label: t('settings') }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentView(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-colors ${
              currentView === id 
                ? 'bg-amber-100 text-amber-600' 
                : 'text-gray-600 hover:text-amber-600'
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  // Home View
  const HomeView = () => (
    <div className="p-4 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-2xl border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700 font-medium">{t('currentWeight')}</p>
              <p className="text-2xl font-bold text-amber-800">{pregnancyData.currentWeight} kg</p>
            </div>
            <Weight className="w-8 h-8 text-amber-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">{t('fetalHeartRate')}</p>
              <p className="text-2xl font-bold text-green-800">{pregnancyData.fetalHeartRate}</p>
              <p className="text-xs text-green-600">{t('beatsPerMin')}</p>
            </div>
            <Heart className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Next Appointment */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">{t('nextAppointment')}</h3>
            <p className="text-amber-600 font-medium">{pregnancyData.nextAppointment}</p>
            <p className="text-sm text-gray-600">{t('midwifeConsultation')}</p>
          </div>
          <Calendar className="w-8 h-8 text-amber-500" />
        </div>
      </div>

      {/* Recent Entries */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">{t('recentMeasurements')}</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {pregnancyData.recentEntries.map((entry, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <p className="font-medium text-gray-800">{entry.type}</p>
                  <button
                    onClick={() => window.open(entry.infoUrl, '_blank')}
                    className="flex items-center justify-center w-6 h-6 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                    title="Læs mere på Sundhedsstyrelsen"
                  >
                    <Info className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">{entry.date} • {entry.provider}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-amber-600">{entry.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button className="w-full bg-amber-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:bg-amber-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>{t('addMeasurement')}</span>
        </button>

        <button 
          onClick={() => setShowMidwifeModal(true)}
          className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t('contactMidwife')}</span>
        </button>
      </div>
    </div>
  );

  // Data View
  const DataView = () => {
    const [showInfo, setShowInfo] = useState(false);

    // Sample weight data for a pregnancy (starting from pre-pregnancy weight)
    const weightData = {
      labels: ['Uge 0', 'Uge 4', 'Uge 8', 'Uge 12', 'Uge 16', 'Uge 20', 'Uge 24', 'Uge 28'],
      datasets: [
        {
          label: language === 'da' ? 'Vægt (kg)' : 'Weight (kg)',
          data: [65.0, 65.2, 65.8, 66.5, 67.2, 68.0, 68.8, 68.5],
          borderColor: 'rgb(245, 158, 11)', // amber-500
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: 'rgb(245, 158, 11)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1f2937',
          bodyColor: '#1f2937',
          borderColor: '#e5e7eb',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return `${language === 'da' ? 'Vægt' : 'Weight'}: ${context.parsed.y.toFixed(1)} ${t('weightUnit')}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: function(value) {
              return value.toFixed(1) + ' ' + t('weightUnit');
            }
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    };

    return (
      <div className="p-4 space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <Activity className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">{t('data')}</h2>
          </div>
          <p className="text-sm text-gray-600">Your pregnancy data and measurements</p>
        </div>

        {/* Weight Chart */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">{t('weightProgress')}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{t('currentWeight')}: 68.5 {t('weightUnit')} ({t('week')} 28)</span>
              <TrendingUp className="w-5 h-5 text-amber-500" />
            </div>
          </div>
          <div className="h-64">
            <Line data={weightData} options={chartOptions} />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <Info className="w-5 h-5" />
              <span className="text-sm">{t('weightInformation')}</span>
            </button>
          </div>
          {showInfo && (
            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 text-sm text-gray-600">
              <p>• {t('normalWeightGain')}</p>
              <p>• {t('weightGainPattern')}</p>
              <p>• {t('currentTotalGain')}: 3.5 {t('weightUnit')}</p>
            </div>
          )}
        </div>

        {/* Recent Measurements */}
        <div className="bg-white rounded-2xl border border-gray-200">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">All Measurements</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {pregnancyData.recentEntries.map((entry, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-gray-800">{entry.type}</p>
                    <button
                      onClick={() => window.open(entry.infoUrl, '_blank')}
                      className="flex items-center justify-center w-6 h-6 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                      title="Læs mere på Sundhedsstyrelsen"
                    >
                      <Info className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{entry.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">{entry.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Calendar View
  const CalendarView = () => (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200">
        <div className="flex items-center space-x-3 mb-3">
          <Calendar className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-800">{t('calendar')}</h2>
        </div>
        <p className="text-sm text-gray-600">Your upcoming appointments</p>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">{t('upcoming')}</h3>
          <Bell className="w-5 h-5 text-amber-500" />
        </div>
        <div className="space-y-3">
          {pregnancyData.appointments.map((appointment, index) => (
            <div key={appointment.id} className={`flex items-center space-x-3 p-3 rounded-xl ${
              index === 0 ? 'bg-amber-50' : 'bg-blue-50'
            }`}>
              <Calendar className={`w-5 h-5 ${
                index === 0 ? 'text-amber-600' : 'text-blue-600'
              }`} />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{t(appointment.type)}</p>
                <p className={`text-sm ${
                  index === 0 ? 'text-amber-600' : 'text-blue-600'
                }`}>
                  {appointment.date} - {appointment.time}
                </p>
                <p className="text-xs text-gray-500">{appointment.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Appointment Button */}
      <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:bg-green-600 transition-colors">
        <Plus className="w-5 h-5" />
        <span>{t('addAppointment')}</span>
      </button>
    </div>
  );

  // Journal View
  const JournalView = () => {
    const [journalText, setJournalText] = useState('');
    const [showSaved, setShowSaved] = useState(false);
    const [showSent, setShowSent] = useState(false);

    const handleSave = () => {
      if (journalText.trim()) {
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 3000);
      }
    };

    const handleSendToMidwife = () => {
      if (journalText.trim()) {
        setShowSent(true);
        setTimeout(() => {
          setShowSent(false);
          setJournalText('');
        }, 3000);
      }
    };

    return (
      <div className="p-4 space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-2xl border border-purple-200">
          <div className="flex items-center space-x-3 mb-3">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">{t('journalForNextMeeting')}</h2>
          </div>
          <p className="text-sm text-gray-600">{t('writeJournal')}</p>
        </div>

        {showSaved ? (
          <div className="bg-green-50 p-4 rounded-2xl border border-green-200 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('journalSaved')}</h3>
            <p className="text-sm text-gray-600">{t('journalSavedDesc')}</p>
          </div>
        ) : showSent ? (
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('journalSent')}</h3>
            <p className="text-sm text-gray-600">{t('journalSentDesc')}</p>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder={t('journalPlaceholder')}
              className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
            />
            <div className="mt-4 space-y-3">
              <button
                onClick={handleSave}
                disabled={!journalText.trim()}
                className="w-full bg-purple-500 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <BookOpen className="w-5 h-5" />
                <span>{t('saveJournal')}</span>
              </button>
              <button
                onClick={handleSendToMidwife}
                disabled={!journalText.trim()}
                className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Mail className="w-5 h-5" />
                <span>{t('sendToMidwife')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Settings View
  const SettingsView = () => (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-2xl border border-purple-200">
        <div className="flex items-center space-x-3 mb-3">
          <Settings className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-800">{t('settings')}</h2>
        </div>
        <p className="text-sm text-gray-600">App preferences and account settings</p>
      </div>

      {/* Settings Options */}
      <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Notifications</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Privacy</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Language</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">{language === 'da' ? 'Dansk' : 'English'}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Download className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Export Data</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );

  // Sharing View
  const SharingView = () => (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-200">
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-6 h-6 text-amber-600" />
          <h2 className="text-lg font-semibold text-gray-800">{t('partnerSharing')}</h2>
        </div>
        <p className="text-sm text-gray-600">{t('sharingSubtitle')}</p>
      </div>

      {!partnerSharing.isEnabled ? (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
          <UserPlus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">{t('noPartner')}</h3>
          <p className="text-sm text-gray-600 mb-4">{t('noPartnerDesc')}</p>
          <button 
            onClick={() => setPartnerSharing(prev => ({ ...prev, isEnabled: true }))}
            className="bg-amber-500 text-white px-6 py-3 rounded-xl font-medium"
          >
            {t('simulateInvitation')}
          </button>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{partnerSharing.partnerName}</p>
                <p className="text-sm text-gray-600">{t('partner')}</p>
              </div>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              {t('active')}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // View renderer
  const renderView = () => {
    switch (currentView) {
      case 'data': 
        return <DataView />;
      case 'journal':
        return <JournalView />;
      case 'sharing': 
        return <SharingView />;
      case 'calendar': 
        return <CalendarView />;
      case 'settings': 
        return <SettingsView />;
      default: 
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showGdprModal && <GdprModal />}
      {showMidwifeModal && <MidwifeCommunicationModal />}
      
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        <Header />
        
        <main className="pb-20">
          {renderView()}
        </main>
        
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default FixedPregnancyApp;