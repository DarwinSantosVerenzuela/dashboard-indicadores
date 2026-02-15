<script setup lang="ts">
import { ref, computed } from 'vue'

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread: boolean;
  status: 'online' | 'away' | 'offline';
  isMuted: boolean;
  isPinned: boolean;
  isBlocked: boolean;
  isArchived: boolean;
}

const conversations = ref([
  {
    id: 1,
    name: 'Sofia Rodriguez',
    lastMessage: '¡El evento fue un éxito! Gracias...',
    time: '6:14 p. m.',
    avatar: 'https://i.pravatar.cc/150?u=sofia',
    unread: true,
    status: 'online',
    isMuted: false,
    isPinned: true
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    lastMessage: '¿Ya revisaste las estadísticas de hoy?',
    time: 'jue',
    avatar: 'https://i.pravatar.cc/150?u=carlos',
    unread: false,
    status: 'offline',
    isMuted: false,
    isPinned: true
  },
  {
    id: 3,
    name: 'Ana García',
    lastMessage: 'Me encantaría colaborar en el próximo...',
    time: 'jue',
    avatar: 'https://i.pravatar.cc/150?u=ana',
    unread: false,
    status: 'away',
    isMuted: true,
    isPinned: false
  },
  {
    id: 4,
    name: 'Julian Vivas',
    lastMessage: 'Envié el reporte por correo.',
    time: 'mié',
    avatar: 'https://i.pravatar.cc/150?u=julian',
    unread: false,
    status: 'offline',
    isMuted: false,
    isPinned: false
  },
  {
    id: 5,
    name: 'Maria Fernanda',
    lastMessage: '¡Hola! ¿Cómo estás?',
    time: '6/2/2026',
    avatar: 'https://i.pravatar.cc/150?u=maria',
    unread: false,
    status: 'online',
    isMuted: false,
    isPinned: false
  },
  {
    id: 6,
    name: 'Roberto Gomez',
    lastMessage: '¿A qué hora es la reunión?',
    time: '18:45',
    avatar: 'https://i.pravatar.cc/150?u=roberto',
    unread: false,
    status: 'online',
    isMuted: false,
    isPinned: false
  },
  {
    id: 7,
    name: 'Lucía Méndez',
    lastMessage: 'Confirmado para mañana.',
    time: 'lun',
    avatar: 'https://i.pravatar.cc/150?u=lucia',
    unread: true,
    status: 'away',
    isMuted: false,
    isPinned: false
  },
  {
    id: 8,
    name: 'David Silva',
    lastMessage: 'Gracias por el contacto.',
    time: '15/02',
    avatar: 'https://i.pravatar.cc/150?u=david',
    unread: false,
    status: 'online',
    isMuted: false,
    isPinned: false
  },
  {
    id: 9,
    name: 'Elena Torres',
    lastMessage: '¿Viste el nuevo diseño?',
    time: '5 feb',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    unread: false,
    status: 'offline',
    isMuted: false,
    isPinned: false
  },
  {
    id: 10,
    name: 'Miguel Ángel',
    lastMessage: 'Mañana te envío los archivos.',
    time: 'ene',
    avatar: 'https://i.pravatar.cc/150?u=miguel',
    unread: false,
    status: 'away',
    isMuted: false,
    isPinned: false
  },
  {
    id: 11,
    name: 'Laura Pineda',
    lastMessage: '¿Me puedes pasar el link del Zoom?',
    time: '12:30',
    avatar: 'https://i.pravatar.cc/150?u=laura',
    unread: true,
    status: 'online',
    isMuted: false,
    isPinned: false
  },
  {
    id: 12,
    name: 'Fernando Ruiz',
    lastMessage: 'Ya subí los cambios al repo.',
    time: 'Vie',
    avatar: 'https://i.pravatar.cc/150?u=fernando',
    unread: false,
    status: 'offline',
    isMuted: false,
    isPinned: false
  },
  {
    id: 13,
    name: 'Carmen Ortiz',
    lastMessage: '¡Feliz cumpleaños! Pásala súper.',
    time: '10 Feb',
    avatar: 'https://i.pravatar.cc/150?u=carmen',
    unread: false,
    status: 'away',
    isMuted: false,
    isPinned: false
  },
  {
    id: 14,
    name: 'Jorge Luis',
    lastMessage: '¿Mañana almorzamos?',
    time: 'lun',
    avatar: 'https://i.pravatar.cc/150?u=jorge',
    unread: false,
    status: 'online',
    isMuted: false,
    isPinned: false,
    isBlocked: false
  },
  {
    id: 15,
    name: 'Ricardo Espina',
    lastMessage: 'Necesito que desbloquees mi cuenta.',
    time: '2 ene',
    avatar: 'https://i.pravatar.cc/150?u=ricardo',
    unread: false,
    status: 'offline',
    isMuted: false,
    isPinned: false,
    isBlocked: true,
    isArchived: false
  },
  {
    id: 16,
    name: 'Trabajo (Archivo)',
    lastMessage: 'Viejos reportes de 2025...',
    time: '2025',
    avatar: 'https://i.pravatar.cc/150?u=archive',
    unread: false,
    status: 'offline',
    isMuted: true,
    isPinned: false,
    isBlocked: false,
    isArchived: true
  }
])

const activeConversation = ref<any>(conversations.value[0])
const currentFilter = ref<'all' | 'unread' | 'blocked' | 'archived'>('all')

const sortedConversations = computed(() => {
  let filtered = [...conversations.value]
  
  if (currentFilter.value === 'archived') {
    filtered = filtered.filter(c => c.isArchived)
  } else {
    // Hide archived chats from other views
    filtered = filtered.filter(c => !c.isArchived)
    
    if (currentFilter.value === 'unread') {
      filtered = filtered.filter(c => c.unread)
    } else if (currentFilter.value === 'blocked') {
      filtered = filtered.filter(c => c.isBlocked)
    }
  }

  return filtered.sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0
    return a.isPinned ? -1 : 1
  })
})

const currentPinnedMessages = computed(() => {
  return messages.value.filter(m => m.isPinned)
})

const latestPinnedMessage = computed(() => {
  const pinned = currentPinnedMessages.value
  return pinned.length > 0 ? pinned[pinned.length - 1] : null
})

const newMessage = ref('')
const showEmojiPicker = ref(false)
const isRecording = ref(false)
const recordingTime = ref(0)
let recordingInterval: any = null

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
  time: string;
  type?: 'text' | 'image' | 'voice';
  image?: string;
  reactions?: string[];
  replyTo?: {
    id: number;
    text: string;
    sender: string;
  };
  isPinned?: boolean;
  isEdited?: boolean;
}

const messages = ref<Message[]>([
  { id: 1, text: '¡Hola! ¿Cómo va todo con el evento?', sender: 'them', time: '10:00 AM', type: 'text', reactions: ['🙌'] },
  { id: 2, text: 'Va muy bien, Sofia. Acabamos de cerrar las donaciones.', sender: 'me', time: '10:05 AM', type: 'text' },
  { id: 3, text: '¡Excelente noticia! 🎉', sender: 'them', time: '10:06 AM', type: 'text' },
  { id: 4, text: '¿Ya tienes el reporte final?', sender: 'them', time: '10:06 AM', type: 'text' },
  { id: 5, text: 'Aún no, lo estoy terminando.', sender: 'me', time: '10:10 AM', type: 'text' },
])

const hoveredMessageId = ref<number | null>(null)
const activeReactionPickerId = ref<number | null>(null)
const quotedMessage = ref<Message | null>(null)
const editingMessageId = ref<number | null>(null)
const selectedMessageIds = ref<number[]>([])
const contextMenu = ref({
  show: false,
  x: 0,
  y: 0,
  messageId: null as number | null
})

const inboxContextMenu = ref({
  show: false,
  x: 0,
  y: 0,
  chatId: null as number | null,
  showMuteSubmenu: false
})

const sendMessage = (text?: string, type: 'text' | 'image' | 'voice' = 'text') => {
  const content = text || newMessage.value
  if (!content.trim() && type === 'text') return
  
  if (editingMessageId.value) {
    const msg = messages.value.find(m => m.id === editingMessageId.value)
    if (msg) {
      msg.text = content
      msg.isEdited = true
    }
    editingMessageId.value = null
  } else {
    messages.value.push({
      id: Date.now(),
      text: content,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type,
      reactions: [],
      replyTo: quotedMessage.value ? { id: quotedMessage.value.id, text: quotedMessage.value.text, sender: quotedMessage.value.sender } : undefined
    })
  }
  
  if (type === 'text') newMessage.value = ''
  showEmojiPicker.value = false
  quotedMessage.value = null
}

const toggleReaction = (messageId: number, emoji: string) => {
  const msg = messages.value.find(m => m.id === messageId)
  if (msg) {
    if (!msg.reactions) msg.reactions = []
    const index = msg.reactions.indexOf(emoji)
    if (index > -1) {
      // If same emoji, remove it (un-react)
      msg.reactions = []
    } else {
      // Replace with new single reaction
      msg.reactions = [emoji]
    }
  }
  closeContextMenu()
}

const openContextMenu = (event: MouseEvent, msgId: number) => {
  let x = event.clientX
  let y = event.clientY
  const menuWidth = 240
  const menuHeight = 350 // Approximate height for message menu with reactions
  
  // Adjust X if overflowing right
  if (x + menuWidth > window.innerWidth) x -= menuWidth
  // Adjust Y if overflowing bottom
  if (y + menuHeight > window.innerHeight) y -= menuHeight
  // Ensure not negative
  if (x < 0) x = 10
  if (y < 0) y = 10

  contextMenu.value = {
    show: true,
    x,
    y,
    messageId: msgId
  }
}

const closeContextMenu = () => {
  contextMenu.value.show = false
}

const openInboxContextMenu = (event: MouseEvent, chatId: number) => {
  event.preventDefault()
  let x = event.clientX
  let y = event.clientY
  const menuWidth = 260
  const menuHeight = 320 // Approximate height for inbox menu
  
  // Adjust X if overflowing right
  if (x + menuWidth > window.innerWidth) x -= menuWidth
  // Adjust Y if overflowing bottom
  if (y + menuHeight > window.innerHeight) y -= menuHeight
  // Ensure not negative
  if (x < 0) x = 10
  if (y < 0) y = 10

  inboxContextMenu.value = {
    show: true,
    x,
    y,
    chatId: chatId,
    showMuteSubmenu: false
  }
}

const closeInboxContextMenu = () => {
  inboxContextMenu.value.show = false
}

const deleteChat = (id: number) => {
  conversations.value = conversations.value.filter(c => c.id !== id)
  if (activeConversation.value?.id === id) {
    activeConversation.value = conversations.value[0] || undefined
  }
  closeInboxContextMenu()
}

const togglePinChat = (id: number) => {
  const conv = conversations.value.find(c => c.id === id)
  if (conv) {
    if (!conv.isPinned) {
      const pinnedCount = conversations.value.filter(c => c.isPinned).length
      if (pinnedCount >= 4) {
        alert('Solo puedes anclar hasta 4 chats.')
        closeInboxContextMenu()
        return
      }
    }
    conv.isPinned = !conv.isPinned
  }
  closeInboxContextMenu()
}

const toggleMuteChat = (id: number) => {
  const conv = conversations.value.find(c => c.id === id)
  if (conv) {
    conv.isMuted = !conv.isMuted
  }
  closeInboxContextMenu()
}

const toggleBlockChat = (id: number) => {
  const conv = conversations.value.find(c => c.id === id)
  if (conv) {
    conv.isBlocked = !conv.isBlocked
  }
  closeInboxContextMenu()
}

const toggleArchiveChat = (id: number) => {
  const conv = conversations.value.find(c => c.id === id)
  if (conv) {
    conv.isArchived = !conv.isArchived
    if (conv.isArchived && activeConversation.value?.id === id) {
       // Switch to first non-archived conversation if current is archived
       activeConversation.value = sortedConversations.value[0] || undefined
    }
  }
  closeInboxContextMenu()
}

const toggleUnreadChat = (id: number) => {
  const conv = conversations.value.find(c => c.id === id)
  if (conv) {
    conv.unread = !conv.unread
  }
  closeInboxContextMenu()
}

const clearChat = (id: number) => {
  if (activeConversation.value?.id === id) {
    messages.value = []
  }
  closeInboxContextMenu()
}

const deleteMessage = (id: number) => {
  messages.value = messages.value.filter(m => m.id !== id)
  closeContextMenu()
}

const pinMessage = (id: number) => {
  const msg = messages.value.find(m => m.id === id)
  if (msg) msg.isPinned = !msg.isPinned
  closeContextMenu()
}

const copyMessage = (text: string) => {
  navigator.clipboard.writeText(text)
  closeContextMenu()
}

const setEdit = (msg: Message) => {
  editingMessageId.value = msg.id
  newMessage.value = msg.text
  closeContextMenu()
}

const setReply = (msg: Message) => {
  quotedMessage.value = msg
  closeContextMenu()
}

const shareMessage = (msg: Message) => {
  alert(`Reenviando mensaje: "${msg.text}"`)
  closeContextMenu()
}

const toggleSelection = (id: number) => {
  const index = selectedMessageIds.value.indexOf(id)
  if (index > -1) selectedMessageIds.value.splice(index, 1)
  else selectedMessageIds.value.push(id)
  closeContextMenu()
}

const scrollToMessage = (id: number) => {
  const el = document.getElementById(`msg-${id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const selectConversation = (conv: any) => {
  activeConversation.value = conv
}

const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value
}

const addEmoji = (emoji: string) => {
  newMessage.value += emoji
}

const handleFileUpload = (event: any) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      messages.value.push({
        id: Date.now(),
        text: 'Imagen adjunta',
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        image: e.target?.result as string,
        type: 'image',
        reactions: []
      })
    }
    reader.readAsDataURL(file)
  }
}

const startRecording = () => {
  isRecording.value = true
  recordingTime.value = 0
  recordingInterval = setInterval(() => {
    recordingTime.value++
  }, 1000)
}

const stopRecording = (send = true) => {
  isRecording.value = false
  clearInterval(recordingInterval)
  if (send && recordingTime.value > 0) {
    sendMessage(`Nota de voz (${formatTime(recordingTime.value)})`, 'voice')
  }
  recordingTime.value = 0
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const emojis = ['👍', '❤️', '😂', '😮', '😢', '🙏', '🔥', '👏', '🥳', '✅', '✨', '🙌', '😍', '🤔', '😎', '💀']
</script>

<template>
  <div class="dashboard-view">
    <div class="header-anchor">
      <DashboardHeader />
    </div>

    <div class="chat-main-container">
      <!-- Sidebar / Inbox -->
      <aside class="inbox-sidebar">
        <header class="inbox-header">
          <div class="inbox-header-top">
            <h2>Mensajes</h2>
            <div class="header-actions">
              <button 
                class="header-action-btn" 
                :class="{ active: currentFilter === 'archived' }"
                @click="currentFilter = currentFilter === 'archived' ? 'all' : 'archived'"
                title="Archivados"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg>
                <span v-if="conversations.some(c => c.isArchived)" class="badge-dot"></span>
              </button>
              <button class="new-chat-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
            </div>
          </div>
          <div class="filter-pills">
            <button 
              class="filter-pill" 
              :class="{ active: currentFilter === 'all' }"
              @click="currentFilter = 'all'"
            >Todos</button>
            <button 
              class="filter-pill" 
              :class="{ active: currentFilter === 'unread' }"
              @click="currentFilter = 'unread'"
            >No leídos</button>
            <button 
              class="filter-pill" 
              :class="{ active: currentFilter === 'blocked' }"
              @click="currentFilter = 'blocked'"
            >Bloqueados</button>
          </div>
        </header>

        <div class="inbox-list">
          <div 
            v-for="conv in sortedConversations" 
            :key="conv.id" 
            class="inbox-item"
            :class="{ active: activeConversation?.id === conv.id, unread: conv.unread, pinned: conv.isPinned }"
            @click="selectConversation(conv)"
            @contextmenu="openInboxContextMenu($event, conv.id)"
          >
            <div class="avatar-container">
              <img :src="conv.avatar" :alt="conv.name" class="avatar" />
              <div v-if="conv.status !== 'offline'" class="status-indicator" :class="conv.status"></div>
            </div>
            <div class="item-content">
              <div class="item-header">
                <span class="name">{{ conv.name }}</span>
                <div class="time-container">
                  <svg v-if="conv.isPinned" class="pin-icon-small" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
                  <svg v-if="conv.isMuted" class="mute-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l3 3.01"></path></svg>
                  <span class="time">{{ conv.time }}</span>
                </div>
              </div>
              <p class="preview">{{ conv.lastMessage }}</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Chat Area -->
      <main class="chat-area">
        <template v-if="activeConversation">
          <header class="chat-header">
            <div class="user-info">
              <div class="avatar-container small">
                <img :src="activeConversation.avatar" alt="" class="avatar" />
                <div v-if="activeConversation.status !== 'offline'" class="status-indicator" :class="activeConversation.status"></div>
              </div>
              <div class="user-details">
                <div class="header-name-row">
                  <h3>{{ activeConversation.name }}</h3>
                  <svg v-if="activeConversation.isMuted" class="mute-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l3 3.01"></path></svg>
                </div>
                <span class="status">
                  {{ 
                    activeConversation.status === 'online' ? 'En línea' : 
                    activeConversation.status === 'away' ? 'Ausente' : 'Desconectado' 
                  }}
                </span>
              </div>
            </div>
            <div class="header-actions">
              <button class="action-btn" title="Mensajes fijados">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
                <span v-if="currentPinnedMessages.length" class="pinned-count">{{ currentPinnedMessages.length }}</span>
              </button>
              <button class="action-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
            </div>
          </header>

          <!-- Pinned Messages Bar -->
          <div v-if="latestPinnedMessage" class="pinned-messages-bar" @click="scrollToMessage(latestPinnedMessage.id)">
            <div class="pinned-bar-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
              <div class="pinned-text">
                <span class="label">Mensaje fijado #{{ currentPinnedMessages.length }}</span>
                <p class="truncate">{{ latestPinnedMessage.text }}</p>
              </div>
            </div>
            <button class="close-pinned-bar" @click.stop="latestPinnedMessage.isPinned = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div class="message-thread" @scroll="closeContextMenu">
            <div 
              v-for="msg in messages" 
              :key="msg.id" 
              :id="'msg-' + msg.id"
              class="message-wrapper" 
              :class="[msg.sender, { 'has-reactions': msg.reactions?.length, 'selected': selectedMessageIds.includes(msg.id) }]"
              @mouseenter="hoveredMessageId = msg.id"
              @mouseleave="hoveredMessageId = null"
              @contextmenu.prevent="openContextMenu($event, msg.id)"
            >
              <div v-if="msg.sender === 'them'" class="avatar-mini">
                <img :src="activeConversation.avatar" alt="" />
              </div>
              <div class="message-content">
                <div class="bubble-container">
                  <div v-if="msg.isPinned" class="pin-indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
                  </div>

                  <!-- Quoted Message inside bubble -->
                  <div v-if="msg.replyTo" class="quoted-in-bubble">
                    <span class="quoted-user">{{ msg.replyTo.sender === 'me' ? 'Tú' : activeConversation.name }}</span>
                    <p>{{ msg.replyTo.text }}</p>
                  </div>

                  <div v-if="msg.type === 'image'" class="image-bubble">
                    <img :src="msg.image" alt="Image attachment" />
                  </div>
                  <div v-else class="message-bubble" @dblclick="toggleReaction(msg.id, '❤️')">
                    <p>{{ msg.text }}</p>
                    <span v-if="msg.isEdited" class="edited-label">editado</span>
                  </div>

                  <div v-if="hoveredMessageId === msg.id" class="message-actions-menu">
                    <div class="action-item reaction-trigger" @mouseenter="activeReactionPickerId = msg.id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                      
                      <div v-if="activeReactionPickerId === msg.id" class="reaction-active-picker inline" @mouseleave="activeReactionPickerId = null">
                        <span 
                          v-for="emoji in ['👍', '❤️', '😂', '😮', '😢', '🙏']" 
                          :key="emoji" 
                          class="picker-emoji"
                          @click="toggleReaction(msg.id, emoji)"
                        >
                          {{ emoji }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="action-item" @click="setReply(msg)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"></polyline><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path></svg>
                    </div>
                    
                    <div class="action-item" @click="shareMessage(msg)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg>
                    </div>
                  </div>

                  <div v-if="msg.reactions?.length" class="reaction-badges">
                    <span 
                      v-for="r in msg.reactions" 
                      :key="r" 
                      class="reaction-badge"
                      @click="toggleReaction(msg.id, r)"
                    >{{ r }}</span>
                  </div>
                </div>
                <span class="message-time">{{ msg.time }}</span>
              </div>
            </div>

            <!-- Telegram Context Menu Overlay -->
            <div v-if="contextMenu.show" class="context-menu-overlay" @click="closeContextMenu">
              <div 
                class="telegram-context-menu" 
                :style="{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }"
                @click.stop
              >
                <!-- Reactions Bar -->
                <div class="menu-reactions-bar">
                  <span 
                    v-for="emoji in ['👍', '⚡', '🤯', '❤️', '👎', '🔥', '🥰', '👏']" 
                    :key="emoji" 
                    class="menu-emoji"
                    @click="contextMenu.messageId && toggleReaction(contextMenu.messageId, emoji)"
                  >
                    {{ emoji }}
                  </span>
                  <div class="more-reactions">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>

                <!-- Menu Actions List -->
                <div class="menu-actions-list">
                  <div v-if="contextMenu.messageId" class="menu-action" @click="setReply(messages.find(m => m.id === contextMenu.messageId)!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"></polyline><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path></svg>
                    <span>Responder</span>
                  </div>
                  <div v-if="contextMenu.messageId && messages.find(m => m.id === contextMenu.messageId)?.sender === 'me'" class="menu-action" @click="setEdit(messages.find(m => m.id === contextMenu.messageId)!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    <span>Editar</span>
                  </div>
                  <div v-if="contextMenu.messageId" class="menu-action" @click="pinMessage(contextMenu.messageId)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
                    <span>Fijar</span>
                  </div>
                  <div v-if="contextMenu.messageId" class="menu-action" @click="copyMessage(messages.find(m => m.id === contextMenu.messageId)!.text)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>Copiar texto</span>
                  </div>
                  <div v-if="contextMenu.messageId" class="menu-action" @click="shareMessage(messages.find(m => m.id === contextMenu.messageId)!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg>
                    <span>Reenviar</span>
                  </div>
                  <div v-if="contextMenu.messageId" class="menu-action danger" @click="deleteMessage(contextMenu.messageId)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    <span>Eliminar</span>
                  </div>
                  <div v-if="contextMenu.messageId" class="menu-action" @click="toggleSelection(contextMenu.messageId)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 16 14"></polyline></svg>
                    <span>Seleccionar</span>
                  </div>
                </div>

                <div class="menu-footer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Nadie lo ha visto</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Emoji Picker Keyboard -->
          <div v-if="showEmojiPicker" class="emoji-picker-popup">
            <div class="emoji-grid">
              <span v-for="emoji in emojis" :key="emoji" class="emoji-item" @click="addEmoji(emoji)">{{ emoji }}</span>
            </div>
          </div>

          <footer class="chat-footer">
            <!-- Quoted Message Preview -->
            <div v-if="quotedMessage" class="quoted-preview">
              <div class="quoted-line"></div>
              <div class="quoted-main">
                <span class="quoted-user">{{ quotedMessage.sender === 'me' ? 'Tú' : (activeConversation ? activeConversation.name : '') }}</span>
                <p>{{ quotedMessage.text }}</p>
              </div>
              <button class="close-quoted" @click="quotedMessage = null">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <!-- Recording UI -->
            <div v-if="isRecording" class="recording-container">
              <div class="recording-pulse"></div>
              <span class="recording-timer">{{ formatTime(recordingTime) }}</span>
              <button class="cancel-rec" @click="stopRecording(false)">Cancelar</button>
              <button class="send-rec" @click="stopRecording(true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>

            <!-- Standard Input UI -->
            <div v-else class="input-container">
              <button class="footer-action" @click="toggleEmojiPicker">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              </button>
              
              <input 
                v-model="newMessage" 
                type="text" 
                placeholder="Escribe un mensaje..." 
                @keyup.enter="() => sendMessage()"
              />

              <label class="footer-action">
                <input type="file" hidden @change="handleFileUpload" accept="image/*" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </label>

              <button v-if="!newMessage" class="footer-action" @click="startRecording">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
              </button>

              <button v-if="newMessage" class="send-btn" @click="() => sendMessage()">Enviar</button>
            </div>
          </footer>
        </template>
        <div v-else class="empty-state">
          <div class="empty-icon">📩</div>
          <h3>Tus mensajes</h3>
          <p>Envía fotos y mensajes privados a un amigo o grupo.</p>
          <button class="primary-btn">Enviar mensaje</button>
        </div>
      </main>
    <!-- Inbox Context Menu Overlay -->
    <div v-if="inboxContextMenu.show" class="context-menu-overlay" @click="closeInboxContextMenu">
      <div 
        class="telegram-context-menu inbox-menu"
        :style="{ top: `${inboxContextMenu.y}px`, left: `${inboxContextMenu.x}px` }"
        @click.stop
      >
        <div class="menu-actions-list">
          <div class="menu-action" @click="togglePinChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13V15H13V21H11V15H5V13L7 11V5H6V3H18V5H17V11L19 13Z"/></svg>
            <span>{{ sortedConversations.find(c => c.id === inboxContextMenu.chatId)?.isPinned ? 'Desfijar' : 'Fijar' }}</span>
          </div>
          <div class="menu-action" @click="toggleArchiveChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg>
            <span>{{ conversations.find(c => c.id === inboxContextMenu.chatId)?.isArchived ? 'Desarchivar' : 'Archivar' }}</span>
          </div>
          
          <div class="menu-action has-submenu" @mouseenter="inboxContextMenu.showMuteSubmenu = true" @mouseleave="inboxContextMenu.showMuteSubmenu = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>Silenciar notificaciones</span>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            
            <div v-if="inboxContextMenu.showMuteSubmenu" class="submenu-container" @mouseenter="inboxContextMenu.showMuteSubmenu = true">
              <div class="menu-action" @click="closeInboxContextMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                <span>Seleccionar tono</span>
              </div>
              <div class="menu-action" @click="toggleMuteChat(inboxContextMenu.chatId!)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l3 3.01"></path></svg>
                <span>Silenciar por 1 hora</span>
              </div>
              <div class="menu-action" @click="toggleMuteChat(inboxContextMenu.chatId!)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><text x="14" y="10" font-size="8" fill="currentColor">z</text></svg>
                <span>Silenciar...</span>
              </div>
              <div class="menu-action danger" @click="toggleMuteChat(inboxContextMenu.chatId!)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                <span>Silenciar siempre</span>
              </div>
            </div>
          </div>
          
          <div class="menu-action" @click="toggleUnreadChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>{{ conversations.find(c => c.id === inboxContextMenu.chatId)?.unread ? 'Marcar como leído' : 'Marcar como no leído' }}</span>
          </div>
          <div class="menu-action danger" @click="toggleBlockChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            <span>{{ conversations.find(c => c.id === inboxContextMenu.chatId)?.isBlocked ? 'Desbloquear usuario' : 'Bloquear usuario' }}</span>
          </div>
          <div class="menu-action" @click="clearChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9.58V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9.42"/><polyline points="22 2 11 13"/><polyline points="22 7 22 2 17 2"/></svg>
            <span>Vaciar chat</span>
          </div>
          <div class="menu-action danger delete" @click="deleteChat(inboxContextMenu.chatId!)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Eliminar chat</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 0 40px;
}

.header-anchor {
  flex-shrink: 0;
  z-index: 10;
}

.chat-main-container {
  flex: 1;
  display: flex;
  background: white;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
}

/* Inbox Sidebar */
.inbox-sidebar {
  width: 400px;
  border-right: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}

.inbox-header {
  padding: var(--space-md);
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.inbox-header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-actions {
  display: flex;
  gap: 4px;
}

.header-action-btn {
  background: none;
  color: var(--color-text-dark);
  padding: 8px;
  border-radius: var(--radius-full);
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  position: relative;
}

.header-action-btn:hover {
  background: var(--color-gray-soft);
}

.header-action-btn.active {
  color: var(--color-accent);
  background: #eef2ff;
}

.badge-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  border: 2px solid white;
}

.filter-pills {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.filter-pills::-webkit-scrollbar {
  display: none;
}

.filter-pill {
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 500;
  background: #f1f5f9;
  color: #64748b;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.filter-pill:hover {
  background: #e2e8f0;
}

.filter-pill.active {
  background: var(--color-accent);
  color: white;
}

.inbox-header h2 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.new-chat-btn {
  background: none;
  color: var(--color-text-dark);
  padding: 8px;
  border-radius: var(--radius-full);
  transition: background 0.2s;
}

.new-chat-btn:hover {
  background: var(--color-gray-soft);
}

.inbox-list {
  flex: 1;
  overflow-y: auto;
}

.inbox-item {
  padding: 10px 10px 10px 8px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 12px;
  margin: 2px 10px;
}

.inbox-item:hover {
  background: #f0f7ff;
}

.inbox-item.active {
  background: #2b5278;
  color: white;
}

.inbox-item.active .name,
.inbox-item.active .time {
  color: white !important;
}

.inbox-item.active .preview {
  color: rgba(255, 255, 255, 0.85) !important;
}

.inbox-item.active::after {
  display: none;
}

.item-content {
  flex: 1;
  min-width: 0;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
}

.time-container {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mute-icon {
  color: #8e8e93;
  opacity: 0.7;
}

/* Pinned Messages Bar */
.pinned-messages-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 10;
  cursor: pointer;
  transition: all 0.2s;
}

.pinned-messages-bar:hover {
  background: #f8f9fa;
}

.pinned-bar-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.pinned-bar-content svg {
  color: var(--color-accent);
}

.pinned-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.pinned-text .label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-accent);
}

.pinned-text p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

.close-pinned-bar {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 4px;
}

.close-pinned-bar:hover {
  color: #999;
}

/* Header Pin Count */
.pinned-count {
  position: absolute;
  top: -2px;
  right: -2px;
  background: var(--color-accent);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid white;
}

.pin-icon-small {
  color: #8e8e93;
  transform: rotate(45deg);
  margin-right: 4px;
}

.inbox-item.pinned {
  background: #f8f9fa;
}

.inbox-item.pinned.active {
  background: #2b5278;
}

.inbox-item.active .pin-icon-small {
  color: rgba(255, 255, 255, 0.7);
}

.name {
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time {
  font-size: 0.8rem;
  color: #8e8e93;
  margin-left: 8px;
  flex-shrink: 0;
}

.preview {
  font-size: 0.9rem;
  color: #8e8e93;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.avatar-container {
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.avatar-container.small {
  width: 40px;
  height: 40px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 2;
}

.status-indicator.online {
  background: #22c55e;
}

.status-indicator.away {
  background: #3b82f6;
}

/* Chat Area */
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.chat-header {
  padding: var(--space-md) 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.user-details h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.header-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.header-actions {
  display: flex;
  gap: var(--space-xs);
}

.action-btn {
  background: none;
  padding: 8px;
  border-radius: var(--radius-full);
  color: #555;
  transition: background 0.2s;
}

.action-btn:hover {
  background: #f8f9fa;
}

.message-thread {
  flex: 1;
  padding: var(--space-lg) 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
}

.message-wrapper {
  display: flex;
  max-width: 80%;
  gap: 8px;
}

.message-wrapper.me {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-wrapper.them {
  align-self: flex-start;
}

.avatar-mini {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  align-self: flex-end;
  margin-bottom: 14px;
}

.avatar-mini img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.message-content {
  display: flex;
  flex-direction: column;
}

.me .message-content {
  align-items: flex-end;
}

.bubble-container {
  position: relative;
  display: flex;
  align-items: center;
}

.me .bubble-container {
  flex-direction: row-reverse;
}

.message-bubble {
  padding: 10px 16px;
  border-radius: 20px;
  font-size: 0.95rem;
  line-height: 1.5;
  position: relative;
  transition: transform 0.1s;
}

.message-bubble:active {
  transform: scale(0.98);
}

.me .message-bubble {
  background: var(--color-accent);
  color: white;
  border-bottom-right-radius: 4px;
}

.them .message-bubble {
  background: #f1f3f5;
  color: var(--color-text-dark);
  border-bottom-left-radius: 4px;
}

/* Telegram-style Hover Actions Menu */
.message-actions-menu {
  display: flex;
  align-items: center;
  background: white;
  padding: 4px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin: 0 12px;
  border: 1px solid #eee;
  z-index: 20;
  animation: actionsFade 0.2s ease-out;
}

@keyframes actionsFade {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.action-item {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
  position: relative;
}

.action-item:hover {
  background: #f5f5f5;
  color: var(--color-accent);
}

.reaction-trigger {
  position: relative;
}

/* Quoted Messages in Thread */
/* Message Indicators */
.pin-indicator {
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: var(--color-accent);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 5;
}

.edited-label {
  font-size: 0.7rem;
  opacity: 0.5;
  margin-left: 8px;
  font-style: italic;
}

.selected .message-bubble {
  box-shadow: 0 0 0 2px var(--color-accent);
}

/* Telegram Context Menu */
.context-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.05);
  z-index: 999;
}

.telegram-context-menu {
  position: absolute;
  background: #2b5278;
  width: 240px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  color: white;
  z-index: 1000;
  animation: menuAppear 0.15s ease-out;
}

@keyframes menuAppear {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.menu-reactions-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.menu-emoji {
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.menu-emoji:hover {
  transform: scale(1.3);
}

.more-reactions {
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-actions-list {
  padding: 4px 0;
}

.menu-action {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.95rem;
}

.menu-action:hover {
  background: #5288c1;
}

.menu-action:hover svg {
  color: white;
}

.menu-action svg {
  opacity: 0.7;
}

.menu-action.danger {
  color: #ff5e5e;
}

.menu-action.danger svg {
  color: #ff5e5e;
  opacity: 1;
}

.menu-action.danger:hover {
  background: rgba(255, 94, 94, 0.1);
}

.menu-footer {
  padding: 8px 16px;
  font-size: 0.75rem;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,0,0,0.1);
  border-top: 1px solid rgba(255,255,255,0.05);
}

.quoted-in-bubble {
  background: rgba(0,0,0,0.05);
  border-left: 3px solid var(--color-accent);
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
  font-size: 0.85rem;
  max-width: 100%;
}

.me .quoted-in-bubble {
  background: rgba(255,255,255,0.15);
  border-left-color: white;
}

.quoted-user {
  display: block;
  font-weight: 600;
  margin-bottom: 2px;
  color: var(--color-accent);
}

.me .quoted-user {
  color: white;
}

/* Quoted Preview in Footer */
.quoted-preview {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
  gap: 12px;
  position: relative;
}

.quoted-line {
  width: 3px;
  height: 24px;
  background: var(--color-accent);
  border-radius: 2px;
}

.quoted-main {
  flex: 1;
  min-width: 0;
}

.quoted-main .quoted-user {
  font-size: 0.8rem;
  margin-bottom: 0;
}

.quoted-main p {
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.close-quoted {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-quoted:hover {
  background: #eee;
  color: #666;
}

/* Inbox Context Menu Positioning and Submenus */
.inbox-menu {
  width: 260px;
}

.has-submenu {
  position: relative;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}

.has-submenu .arrow {
  margin-left: auto;
  opacity: 0.5;
}

.submenu-container {
  position: absolute;
  left: calc(100% - 4px);
  top: 0;
  background: #2b5278;
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  padding: 4px 0;
  z-index: 1001;
  animation: submenuAppear 0.15s ease-out;
}

@keyframes submenuAppear {
  from { opacity: 0; transform: translateX(5px); }
  to { opacity: 1; transform: translateX(0); }
}

.submenu-container .menu-action {
  padding: 8px 12px;
  font-size: 0.9rem;
}

.inbox-menu .menu-action svg {
  color: #8e8e93;
}

.inbox-menu .menu-action:hover svg {
  color: white;
}

.inbox-menu .menu-action.delete {
  color: #ff5e5e;
}

.inbox-menu .menu-action.delete svg {
  color: #ff5e5e;
}

/* Reactions */
.reaction-badges {
  position: absolute;
  bottom: -10px;
  left: 12px;
  display: flex;
  gap: 2px;
  background: white;
  padding: 2px 6px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border: 1px solid #f0f0f0;
  z-index: 10;
}

.me .reaction-badges {
  left: auto;
  right: 12px;
}

.reaction-badge {
  font-size: 0.8rem;
}

.has-reactions {
  margin-bottom: 8px;
}

.reaction-active-picker.inline {
  position: absolute;
  top: -45px;
  left: -50px;
  background: white;
  padding: 6px 12px;
  border-radius: 30px;
  display: flex;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  border: 1px solid #eee;
  z-index: 100;
  animation: pickerPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pickerPop {
  0% { transform: scale(0.5) translateY(20px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.picker-emoji {
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.picker-emoji:hover {
  transform: scale(1.3);
}

.image-bubble img {
  max-width: 300px;
  max-height: 400px;
  border-radius: 12px;
  border: 1px solid #eee;
}

.message-time {
  font-size: 0.7rem;
  margin-top: 4px;
  opacity: 0.6;
}

/* Emoji Picker */
.emoji-picker-popup {
  position: absolute;
  bottom: 80px;
  left: 360px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border: 1px solid #eee;
  padding: 12px;
  z-index: 100;
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.emoji-item {
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  text-align: center;
  transition: background 0.2s;
}

.emoji-item:hover {
  background: #f0f0f0;
}

/* Recording UI */
.recording-container {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #fef2f2;
  padding: 12px 20px;
  border-radius: var(--radius-md);
  margin-bottom: 2px;
}

.recording-pulse {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

.recording-timer {
  font-weight: 600;
  color: #ef4444;
  font-variant-numeric: tabular-nums;
  flex: 1;
}

.cancel-rec {
  background: none;
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
}

.send-rec {
  background: #ef4444;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Chat Footer */
.chat-footer {
  padding: var(--space-md) 24px;
  position: relative;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #f8f9fa;
  border-radius: var(--radius-xl);
  border: 1px solid transparent;
  transition: all 0.2s;
}

.input-container:focus-within {
  background: white;
  border-color: #eee;
}

.input-container input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 6px 0;
  font-size: 0.95rem;
  outline: none;
}

.footer-action {
  opacity: 0.6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-action:hover {
  opacity: 1;
}

.send-btn {
  color: var(--color-accent);
  font-weight: 700;
  background: none;
  cursor: pointer;
}

/* Empty State */
.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-xl);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: var(--space-md);
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
  max-width: 250px;
}

.primary-btn {
  background: var(--color-accent);
  color: white;
  padding: 10px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: opacity 0.2s;
}

.primary-btn:hover {
  opacity: 0.9;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
